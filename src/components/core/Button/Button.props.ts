import { AriaButtonOptions } from '@react-aria/button';
import { ReactNode } from 'react';

export enum Appearance {
  DEFAULT = 'default',
  OUTLINED = 'outlined',
}

export interface ButtonProps extends AriaButtonOptions<'button'> {
  children: ReactNode;
  appearance?: Appearance;
}
