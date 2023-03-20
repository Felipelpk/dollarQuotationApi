import { Injectable } from '@nestjs/common';
import { bcApi } from './bc-api';

@Injectable()
export class BcApiService {
  async getQuotation(date: string) {
    const dayDate = date.slice(0, 2);
    const monthDate = date.slice(3, 5);
    const yearDate = date.slice(6, 10);

    const dateFormatted = `${monthDate}/${dayDate}/${yearDate}`;

    const value = await bcApi.get(
      `CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${dateFormatted}'&$top=100&$format=json`,
    );

    return value.data.value[0];
  }
}
