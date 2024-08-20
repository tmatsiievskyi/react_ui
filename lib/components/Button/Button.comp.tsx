import React, { type ComponentPropsWithRef } from 'react';
import { type VariantProps } from 'cva';
import { buttonStyles } from './Button.style';
import { cm } from '../../utils';

type TButtonElementProps = ComponentPropsWithRef<'button'>;

export type TButtonProps = {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & TButtonElementProps &
  VariantProps<typeof buttonStyles>;

export function Button({
  className,
  buttonType,
  size,
  rounded,
  label,
  rightIcon,
  spacing,
  leftIcon,
  ...props
}: TButtonProps) {
  return (
    <button
      className={cm(
        buttonStyles({ buttonType, size, rounded, spacing }),
        className
      )}
      type='button'
      {...props}
    >
      {Boolean(leftIcon) && leftIcon}
      {Boolean(label) && label}
      {Boolean(rightIcon) && rightIcon}
    </button>
  );
}
