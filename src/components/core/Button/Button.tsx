import { useButton } from 'react-aria';
import { FC, useRef } from 'react';
import { ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = (props) => {
  let ref = useRef<HTMLButtonElement>(null);
  let { buttonProps } = useButton(props, ref);

  return (
    <button {...buttonProps} ref={ref}>
      {props.children}
    </button>
  );
}

export default Button;
