import { FC, ReactElement } from 'react';
import { HeaderProps } from './Header.props';
import s from './Heaeder.module.scss';
import { Avatar, Button } from '../../core';
import Image from 'next/image';
import { MonthSlider } from '../../elements';
import PlusIcon from '/public/icons/plus-icon.svg';
import clsx from 'clsx';

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
        <MonthSlider disabled={false}/>
        <div
          className={clsx(s['nav__divider'], isAuthorized && s['nav__divider_auth'])}
        />
        {isAuthorized ? (
          <Button type='button' icon={<PlusIcon />} />
        ) : (
          <Button type='button'>Войти</Button>
        )}
        {isAuthorized && <Avatar hoverable className={s['nav__avatar']} />}
      </nav>
    </header>
  );
};
