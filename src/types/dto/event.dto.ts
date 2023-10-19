export interface EventDTO {
  id: number;
  dateStart: string;
  title: string;
  description: string;
  location: string;
  dateEnd: string;
  createdAt: string;
  updatedAt: string;
  photos: unknown[] | null;
  participants: unknown[];
  createdBy: unknown[];
  updatedBy: unknown[];
  owner: unknown | null;
}
