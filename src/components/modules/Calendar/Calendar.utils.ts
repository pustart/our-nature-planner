import moment from 'moment';
import { EventDTO } from '../../../types/dto/event.dto';

export const isDayContainCurrentEvent = (
  event: EventDTO,
  day: moment.Moment
) => {
  const eventStart: moment.Moment = moment(event.dateStart);
  const eventEnd: moment.Moment = moment(event.dateEnd);

  const isStartDay = day.isSame(eventStart, 'day');
  const isEndDay = day.isSame(eventEnd, 'day');
  const isInsideInterval = day.isBetween(eventStart, eventEnd, 'day', '[]'); // '[]' для включения краев

  return isStartDay || isEndDay || isInsideInterval;
};
