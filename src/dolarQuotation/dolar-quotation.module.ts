import { Module } from '@nestjs/common';
import { BcApiService } from 'src/common/bc-api.service';
import { PrismaService } from 'src/prisma.service';
import { DolarQuotationResolver } from './dolar-quotation.resolver';
import { DolarQuotationService } from './dolar-quotation.service';

@Module({
  imports: [],
  providers: [
    DolarQuotationResolver,
    DolarQuotationService,
    PrismaService,
    BcApiService,
  ],
})
export class DolarQuotationModule {}
