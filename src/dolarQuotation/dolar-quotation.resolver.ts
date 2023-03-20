import { Resolver, Query, Args } from '@nestjs/graphql';
import { DolarQuotationService } from './dolar-quotation.service';
import { GetDolarQuotationArgs } from './dto/args';
import { DolarQuotationModel } from './dto/model';

@Resolver()
export class DolarQuotationResolver {
  constructor(private readonly dolarQuotationService: DolarQuotationService) {}

  @Query(() => DolarQuotationModel, { name: 'getDolarQuotation' })
  async getDolarQuotation(@Args() args: GetDolarQuotationArgs) {
    return this.dolarQuotationService.getQuotation(args);
  }
}
