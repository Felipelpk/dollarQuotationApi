import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DolarQuotationModule } from './dolarQuotation/dolar-quotation.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    DolarQuotationModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [DolarQuotationModule],
      autoSchemaFile: true,
    }),
  ],
  providers: [PrismaService],
})
export class AppModule {}
