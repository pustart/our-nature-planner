import { FC } from 'react';
import { SlideButtonsProps } from './SlideButtons.props';
import LeftArrow from '/public/icons/left-arrow.svg';
import RightArrow from '/public/icons/right-arrow.svg';
import s from './SlideButtons.module.scss';
import { Button } from '..';

export const SlideButtons: FC<SlideButtonsProps> = ({ disabled = false }) => {
  return (
    <nav className={s["btns-container"]}>
      <Button type='button' icon={<LeftArrow />} className={s['arrow-btn']} />
      <Button type='button' icon={<RightArrow />} className={s['arrow-btn']} />
    </nav>
  );
};
