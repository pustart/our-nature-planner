import { FC } from 'react';
import { SlideButtons } from '../../core';
import { MonthSliderProps } from './MonthSlider.props';
import s from './MonthSlider.module.scss';

export const MonthSlider: FC<MonthSliderProps> = ({disabled}) => {
return (
  <div className={s['month-slider']}>
    <h3 className={s['month-slider__title']}>Сентябрь</h3>
    <SlideButtons disabled={disabled} />
  </div>
);
}
