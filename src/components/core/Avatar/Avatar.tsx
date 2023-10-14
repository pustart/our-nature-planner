import { FC } from 'react';
import { AvatarProps } from './Avatar.props';
import s from './Avatar.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

export const Avatar: FC<AvatarProps> = ({ src, hoverable = false, className }) => {
  return (
    <div className={clsx(s.avatar, hoverable && s['avatar_hoverable'],className)}>
      <Image
        className={s['avatar__img']}
        priority
        fill
        objectFit={'cover'}
        src={src ? src : '/images/avatar-placeholder.webp'}
        alt='Аватар.'
      />
    </div>
  );
};
