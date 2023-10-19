import { Role } from '../../../constants/role.enum';
import { EventDTO } from '../../../types/dto/event.dto';

export interface EventTagProps {
  role?: Role | null;
  past: boolean;
  event: EventDTO;
}
