import { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export enum LinkTarget {
  BLANK = '_blank',
  SELF = '_self',
  PARENT = '_parent',
  TOP = '_top',
}

export interface CustomLinkProps extends LinkProps {
  className: string;
  children: ReactNode;
  target?: LinkTarget;
}
