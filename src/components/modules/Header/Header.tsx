import { FC } from 'react';
import { HeaderProps } from './Header.props';
import s from './Heaeder.module.scss';
import { Button } from '../../core';
import Image from 'next/image';
import { MonthSlider } from '../../elements';

export const Header: FC<HeaderProps> = ({ isAuthorized }) => {
  return (
    <header className={s.header}>
      <aside className={s.aside}>
        <Image
          priority
          src='/icons/rdclr-logo.svg'
          width={53}
          height={31}
          alt='Логотип RedCollar.'
        />
        <p className={s['aside__description']}>red collar</p>
        <h1 className={s['aside__title']}>
          planner <span className={s['aside__title_red']}>event</span>
        </h1>
      </aside>
      <nav className={s.nav}>
        <MonthSlider disabled={false} />
        <div className={s['nav__divider']} />
        <Button>Войти</Button>
      </nav>
    </header>
  );
};
