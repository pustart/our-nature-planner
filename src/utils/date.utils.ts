import moment from 'moment';
import { TOTAL_DAYS } from '../components/modules/Calendar/Calendar.constants';

export function getPeriodBorders(period: moment.Moment): [string, string] {
  const startBorder: moment.Moment = period
    .clone()
    .startOf('month')
    .startOf('week')

  const startDate: string = startBorder.toISOString();

  const endDate: string = startBorder
    .clone()
    .add(TOTAL_DAYS, 'days')
    .toISOString();

  return [startDate, endDate];
};
