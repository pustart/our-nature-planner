import NextLink from 'next/link';
import { FC } from 'react';
import { CustomLinkProps, LinkTarget } from './Link.props';

export const Link: FC<CustomLinkProps> = ({ children, target = LinkTarget.SELF, ...rest }) => {
  return <NextLink passHref {...rest}>
    <a target={target} className={rest.className}>
      {children}
    </a>
  </NextLink>;
};
