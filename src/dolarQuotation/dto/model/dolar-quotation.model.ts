import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DolarQuotationModel {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  valueForSell: string;

  @Field(() => String, { nullable: false })
  valueForBuy: string;

  @Field(() => String, { nullable: false })
  dateQuotation: string;

  @Field(() => String, { nullable: false })
  createdAt: Date;

  @Field(() => Boolean, { nullable: true })
  approximateQuotation?: boolean;
}
