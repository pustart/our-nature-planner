import { createEffect } from 'effector';
import { request } from './common';
import { EventDTO } from '../types/dto/event.dto';

export type Params = {
  startDate: string;
  endDate: string;
};

export const getAllEventsFx = createEffect<Params, EventDTO[]>();

getAllEventsFx.use(async (params: Params) => {
  const events = await request<EventDTO[]>(
    `events?populate=*&filters[dateStart][$gte]=${params.startDate}&filters[dateStart][$lte]=${params.endDate}`
  );

  return events;
});
