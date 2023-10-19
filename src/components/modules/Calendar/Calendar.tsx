import { FC } from 'react';
import { CalendarProps } from './Calendar.props';
import s from './Calendar.module.scss';
import clsx from 'clsx';
import { Day } from '../../elements';
import moment from 'moment';
import { TOTAL_DAYS, WEEK_DAYS } from './Calendar.constants';
import { useStore } from 'effector-react';
import { $events, $period } from '../../../stores/calendar.model';
import { EventDTO } from '../../../types/dto/event.dto';
import { isDayContainCurrentEvent } from './Calendar.utils';

export const Calendar: FC<CalendarProps> = ({events}) => {
  let eventsToShow: EventDTO[] = [];
  const period: moment.Moment = useStore($period);
  const storedEvents: EventDTO[] = useStore($events);

  storedEvents.length === 0
    ? (eventsToShow = events)
    : (eventsToShow = storedEvents);

  const startDay = period.clone().startOf('month').startOf('week');
  const day: moment.Moment = startDay.clone().subtract(1, 'day');
  const daysMap: moment.Moment[] = [...Array(TOTAL_DAYS)].map(() => day.add(1, 'day').clone());

  return (
    <article className={s['calendar-container']}>
      <header className={clsx(s['calendar-container__header'], s.header)}>
        {WEEK_DAYS.map((day) => (
          <h4 key={day} className={s['header__title']}>
            {day}
          </h4>
        ))}
      </header>
      <div className={s['calendar-container__grid']}>
        {daysMap.map((day) => (
          <Day
            key={day.format('X')}
            date={day}
            nonActive={day.format('MMM') !== period.format('MMM')}
            isHighlight={
              day.format('MM.DD.YYYY') === moment().format('MM.DD.YYYY')
            }
            events={eventsToShow.filter((event) =>
              isDayContainCurrentEvent(event, day)
            )}
          />
        ))}
      </div>
    </article>
  );
};
