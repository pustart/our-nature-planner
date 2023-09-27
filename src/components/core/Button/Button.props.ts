import { AriaButtonOptions } from '@react-aria/button';
import { ReactNode } from 'react';

export interface ButtonProps extends AriaButtonOptions<'button'> {
  children: ReactNode;
  appearance?: 'default' | 'outlined';
}
