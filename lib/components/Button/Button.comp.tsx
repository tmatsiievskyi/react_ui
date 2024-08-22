import React, { type ComponentPropsWithRef, forwardRef } from 'react';
import { type VariantProps } from 'cva';
import { Slot } from '@radix-ui/react-slot';
import { buttonStyles } from './Button.style';
import { cm } from '../../utils';

type TButtonElementProps = ComponentPropsWithRef<'button'>;

export type TButtonProps = {
  asChild?: boolean;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & TButtonElementProps &
  VariantProps<typeof buttonStyles>;

const Button = forwardRef<HTMLButtonElement, TButtonProps>(
  (
    {
      className,
      buttonType,
      size,
      rounded,
      label,
      spacing,
      asChild,
      rightIcon,
      leftIcon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cm(
          buttonStyles({ buttonType, size, rounded, spacing }),
          className,
        )}
        ref={ref}
        {...props}
      >
        {!asChild ? (
          <>
            {!!leftIcon && leftIcon}
            {!!label && label}
            {!!rightIcon && rightIcon}
          </>
        ) : (
          props.children
        )}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button };
