import { FC, useEffect } from 'react';
import { SlideButtons } from '../../core';
import { MonthSliderProps } from './MonthSlider.props';
import s from './MonthSlider.module.scss';
import { useStore, useUnit } from 'effector-react';
import {
  $period,
  incrementPeriod,
  decrementPeriod,
} from '../../../stores/calendar.model';
import moment from 'moment';
import 'moment/locale/ru';

export const MonthSlider: FC<MonthSliderProps> = ({ disabled }) => {
  const p = useStore($period);
  const period: moment.Moment = moment(p);

  const month: string = period.format('MMMM');
  const year: string = period.format('YYYY');
  const currentYear: string = new Date().getFullYear().toString();

  return (
    <div className={s['month-slider']}>
      <h3 className={s['month-slider__title']}>{`${month}${
        year !== currentYear ? ' ' + year : ''
      }`}</h3>
      <SlideButtons
        disabled={disabled}
        onLeftBtnClick={decrementPeriod}
        onRightBtnClick={incrementPeriod}
      />
    </div>
  );
};
