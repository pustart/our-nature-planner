import { ReactNode } from 'react';

export interface LayoutProps extends Record<string, unknown> {
  children: ReactNode;
  isAuthorized: boolean;
}
