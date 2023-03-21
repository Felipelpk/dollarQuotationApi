import { Injectable } from '@nestjs/common';
import { bcApi } from './bc-api';
import { isWeekendAndweekendDay } from './helpers';

@Injectable()
export class BcApiService {
  async getQuotation(dateString: string) {
    const quotationDate = new Date(dateString);
    const weekendDay = isWeekendAndweekendDay(quotationDate);

    let dayDate;
    dayDate = quotationDate.getDate();

    if (weekendDay.isWeekend) {
      dayDate =
        quotationDate.getDate() -
        (weekendDay.weekendDay === 'Saturday' ? 1 : 2);
    }

    const dayDateFormatedd = dayDate >= 10 ? dayDate : `0${dayDate}`;

    const monthDate = quotationDate.getMonth() + 1;
    const monthDateFormatedd = monthDate >= 10 ? monthDate : `0${monthDate}`;

    const yearDate = quotationDate.getFullYear();

    const dateFormatted = `${monthDateFormatedd}/${dayDateFormatedd}/${yearDate}`;

    const value = await bcApi.get(
      `CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${dateFormatted}'&$top=100&$format=json`,
    );

    return {
      ...value.data.value[0],
      dateQuotation: dateFormatted,
    };
  }
}
