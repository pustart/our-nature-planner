import { FC } from 'react';
import { HtagProps } from './Htag.props';
import clsx from 'clsx';
import styles from './Htag.module.css';

const Htag: FC<HtagProps> = ({ tag, children, className }) => {
  switch (tag) {
    case 'h1':
      return <h1 className={clsx(styles.h1, className)}>{children}</h1>;
    case 'h2':
      return <h2 className={clsx(styles.h2, className)}>{children}</h2>;
    case 'h3':
      return <h3 className={clsx(styles.h3, className)}>{children}</h3>;
    case 'h4':
      return <h4 className={clsx(styles.h4, className)}>{children}</h4>;
    case 'h5':
      return <h5 className={clsx(styles.h5, className)}>{children}</h5>;
    case 'h6':
      return <h6 className={clsx(styles.h6, className)}>{children}</h6>;
    default:
      return <></>;
  }
};

export default Htag;
