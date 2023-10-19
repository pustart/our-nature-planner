import { FC } from 'react';
import { EventTagProps } from './EventTag.props';
import s from './EventTag.module.scss';
import clsx from 'clsx';
import { Role } from '../../../constants/role.enum';

export const EventTag: FC<EventTagProps> = ({ role = null, event, past }) => {
  let badge: null | JSX.Element = null;

  switch (role) {
    case Role.PARTICIPANT:
      badge = <span className={s['tag__badge_participant']}/>;
      break;
    case Role.AUTHOR:
      badge = (
        <span className={clsx(s['tag__badge'], s['tag__badge_author'])}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='none'
          >
            <path
              fill='currentColor'
              d='M8 1s1.05 3.1 2.475 4.525C11.899 6.95 15 8 15 8s-3.1 1.05-4.525 2.475C9.05 11.899 8 15 8 15s-1.05-3.1-2.475-4.525C4.101 9.05 1 8 1 8s3.1-1.05 4.525-2.475C6.95 4.101 8 1 8 1Z'
            />
          </svg>
        </span>
      );
      break;
  }


  return (
    <p
      className={clsx(
        s['tag'],
        past && s['tag_past'],
        role === Role.AUTHOR && s['tag_highlight']
      )}
    >
      {badge}
      {event.title}
    </p>
  );
};
