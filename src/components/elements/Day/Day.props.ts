import { EventDTO } from '../../../types/dto/event.dto';

export interface DayProps {
  date: moment.Moment;
  nonActive?: boolean;
  isHighlight?: boolean;
  events?: EventDTO[];
}
