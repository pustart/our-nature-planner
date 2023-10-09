import { useButton } from 'react-aria';
import { FC, useRef } from 'react';
import { Appearance, ButtonProps } from './Button.props';
import clsx from 'clsx';
import s from './Button.module.scss';

const Button: FC<ButtonProps> = (props) => {
  let ref = useRef<HTMLButtonElement>(null);
  let { buttonProps } = useButton(props, ref);
  let btnAppearance: string = s['btn__default'];

  switch (props.appearance) {
    case Appearance.OUTLINED:
      btnAppearance = s['btn__outlined']
      break;
  }

  return (
    <button {...buttonProps} ref={ref}  disabled={props.disabled} className={clsx(s.btn, btnAppearance, props.className)}>
      {props.children}
    </button>
  );
}

export default Button;
