import { cva } from 'cva';

export const buttonStyles = cva(
  'flex flex-row gap-x-4 disabled:cursor-not-allowed items-center justify-center',
  {
    variants: {
      buttonType: {
        primary: `select-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all 
          disabled:pointer-events-none disabled:opacity-70 disabled:shadow-none disabled:cursor-not-allowed`,
        secondary:
          'select-none bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md transition-all',
        outline:
          'select-none bg-background text-primary/90 hover:bg-accent/70 border border-primary/50 hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: ['text-base'],
        small: ['text-sm'],
        large: ['text-lg'],
        xxl: ['text-2xl'],
      },
      spacing: {
        default: ['py-2', 'px-4'],
        small: ['py-1', 'px-2'],
        large: ['py-3', 'px-6'],
        xxl: ['py-4', 'px-8'],
      },
      rounded: {
        default: 'rounded-md',
        sm: 'rounded-sm',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        xxl: 'rounded-2xl',
        none: 'rounded-none',
        full: 'rounded-full',
      },
    },
    compoundVariants: [
      {
        buttonType: 'primary',
        size: 'default',
        spacing: 'default',
        rounded: 'default',
      },
    ],
    defaultVariants: {
      buttonType: 'primary',
      size: 'default',
      rounded: 'default',
      spacing: 'default',
    },
  },
);
