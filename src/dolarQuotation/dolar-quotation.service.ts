import { Injectable } from '@nestjs/common';
import { BcApiService } from 'src/common/bc-api.service';
import { PrismaService } from 'src/prisma.service';
import { randomUUID } from 'node:crypto';
import { DolarQuotationModel, GetDolarQuotationArgs } from './dto';

@Injectable()
export class DolarQuotationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcApiService: BcApiService,
  ) {}

  async getQuotation(
    args: GetDolarQuotationArgs,
  ): Promise<DolarQuotationModel> {
    const { date } = args;

    const initialQuotationFromDB = await this.prisma.dolarQuotation.findFirst({
      where: {
        dateQuotation: {
          equals: date,
        },
      },
    });

    if (!initialQuotationFromDB) {
      const quotationFromBcApi = await this.bcApiService.getQuotation(date);

      if (!quotationFromBcApi) {
        const lastQuotation = await this.prisma.dolarQuotation.findFirst({
          where: {
            dateQuotation: {
              lte: date,
            },
          },
        });

        return {
          ...lastQuotation,
          approximateQuotation: true,
        };
      }

      const quotationSavedOnDB = await this.prisma.dolarQuotation.create({
        data: {
          dateQuotation: quotationFromBcApi.dateQuotation,
          id: randomUUID(),
          valueForBuy: String(quotationFromBcApi.cotacaoCompra),
          valueForSell: String(quotationFromBcApi.cotacaoVenda),
        },
      });

      return {
        ...quotationSavedOnDB,
        approximateQuotation:
          new Date(date) !== new Date(quotationFromBcApi.dateQuotation)
            ? true
            : false,
      };
    }
    return {
      ...initialQuotationFromDB,
      approximateQuotation:
        new Date(date) !== new Date(initialQuotationFromDB.dateQuotation)
          ? false
          : true,
    };
  }
}
