import { FC } from 'react';
import { DayProps } from './Day.props';
import s from './Day.module.scss';
import { useStore } from 'effector-react';
import { $period } from '../../../stores/calendar.model';
import moment from 'moment';
import clsx from 'clsx';
import { EventTag } from '../../core/EventTag/EventTag';
import { Role } from '../../../constants/role.enum';

export const Day: FC<DayProps> = ({
  date,
  nonActive = false,
  isHighlight = false,
  events = [],
}) => {
  let dayToShow: string = date.format('D');
  if (dayToShow === '1') dayToShow = dayToShow + ' ' + date.format('MMM');

  return (
    <section className={clsx(s.day, nonActive && s['day_inactive'])}>
      <p
        className={clsx(
          s['day__date'],
          isHighlight && s['day__date_highlight']
        )}
      >
        {dayToShow}
      </p>
      <ul className={s['day__list']}>
        {events.map((event) => (
          <li key={event.id} className={s['day__list-item']}>
            <EventTag
              event={event}
              past={moment(event.dateStart).isBefore(moment().format('YYYY-MM-DD'))}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
