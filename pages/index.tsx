import { Calendar, Header } from '../src/components/modules';
import { withDefaultLayout } from '../src/layouts/Default/Layout';
import { CalendarPageProps } from '../src/types/interfaces/calendarPage.interface';
import moment from 'moment';
import { FC } from 'react';
import { EventDTO } from '../src/types/dto/event.dto';
import { request } from '../src/api/common';
import { getPeriodBorders } from '../src/utils/date.utils';

export const getServerSideProps = async () => {
  const [startDate, endDate] = getPeriodBorders(moment());

  const events: EventDTO[] = await request<EventDTO[]>(
    `events?populate=*&filters[dateStart][$gte]=${startDate}&filters[dateStart][$lte]=${endDate}`
  );

  return {
    props: {
      events,
    },
  };
};

const Home: FC<CalendarPageProps> = ({ events }) => {
  return <Calendar events={events} />;
};

export default withDefaultLayout(Home, false);
