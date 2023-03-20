import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetDolarQuotationArgs {
  @Field(() => String, { nullable: false })
  date!: string;
}
