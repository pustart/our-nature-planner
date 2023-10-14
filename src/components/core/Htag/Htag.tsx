import { FC } from 'react';
import { HtagProps } from './Htag.props';
import clsx from 'clsx';
import s from './Htag.module.scss';

export const Htag: FC<HtagProps> = ({ tag, children, className }) => {
  switch (tag) {
    case 'h1':
      return <h1 className={clsx(s.h1, className)}>{children}</h1>;
    case 'h2':
      return <h2 className={clsx(s.h2, className)}>{children}</h2>;
    case 'h3':
      return <h3 className={clsx(s.h3, className)}>{children}</h3>;
    case 'h4':
      return <h4 className={clsx(s.h4, className)}>{children}</h4>;
    case 'h5':
      return <h5 className={clsx(s.h5, className)}>{children}</h5>;
    case 'h6':
      return <h6 className={clsx(s.h6, className)}>{children}</h6>;
    default:
      return <></>;
  }
};
