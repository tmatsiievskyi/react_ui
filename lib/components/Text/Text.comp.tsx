import React, { type PropsWithChildren } from 'react';
import { textStyles } from './Text.style';

type TTextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
type TTextColor = 'dark' | 'light' | 'primary';
type TTextAs = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TTextProps = {
  size?: TTextSize;
  color?: TTextColor;
  as?: TTextAs;
  className?: string;
} & PropsWithChildren;

const Text = ({
  children,
  className,
  color = 'dark',
  size = 'base',
  as = 'p',
  ...props
}: TTextProps) => {
  const Tag = as;

  return (
    <Tag className={textStyles({ color, size, className })} {...props}>
      {children}
    </Tag>
  );
};

Text.displayName = 'Text';

export { Text };
