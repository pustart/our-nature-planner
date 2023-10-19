import { Scope } from 'effector';
import { EventDTO } from '../dto/event.dto';

export interface CalendarPageProps extends React.JSX.IntrinsicAttributes {
  events: EventDTO[];
}
