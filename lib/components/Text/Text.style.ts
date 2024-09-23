import { cva } from 'cva';

export const textStyles = cva('font-medium, leading-normal', {
  variants: {
    color: {
      light: 'text-light',
      dark: 'text-dark',
      primary: 'text-primary',
    },
    size: {
      base: 'text-base',
      xs: 'text-xs',
      sm: 'text-sm',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    color: 'dark',
    size: 'base',
  },
});
