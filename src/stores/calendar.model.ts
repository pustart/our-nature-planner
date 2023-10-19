import { createStore, createEvent, sample } from 'effector';
import moment from 'moment';
import { spread } from 'patronum/spread';
import 'moment/locale/ru';
import { EventDTO } from '../types/dto/event.dto';
import { getAllEventsFx } from '../api/queries';
import { getPeriodBorders } from '../utils/date.utils';

export const incrementPeriod = createEvent();
export const decrementPeriod = createEvent();

export const $events = createStore<EventDTO[]>([]).on(
  getAllEventsFx.doneData,
  (events, newEvents) => [...newEvents]
);

export const $period = createStore(moment().seconds(0).milliseconds(0));

sample({
  clock: incrementPeriod,
  source: {
    period: $period,
    events: $events,
  },
  fn: ({ period }) => {
    const nextPeriod: moment.Moment = moment(period)
      .add(1, 'month');
    const [startDate, endDate] = getPeriodBorders(nextPeriod);
    getAllEventsFx({ startDate, endDate });

    return { period: nextPeriod };
  },
  target: spread({
    targets: { period: $period},
  }),
});

sample({
  clock: decrementPeriod,
  source: {
    period: $period,
  },
  fn: ({ period }) => {
    const prevPeriod: moment.Moment = moment(period)
      .subtract(1, 'month');
    const [startDate, endDate] = getPeriodBorders(prevPeriod);
    getAllEventsFx({ startDate, endDate });

    return { period: prevPeriod };
  },
  target: spread({
    targets: { period: $period },
  }),
});
