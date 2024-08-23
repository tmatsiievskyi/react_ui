import { cva } from 'cva';

export const inputStyles = cva('', {
  variants: {
    inputType: {
      default: `flex w-full rounded-md border font-light border-input bg-transparent
       text-primary shadow-sm transition-colors 
      file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder-gray-300 placeholder:text-sm
      focus-visible:outline-none  without-ring focus:border-primary/40 focus:border-[1.5px] focus:shadow-md
      disabled:cursor-not-allowed disabled:opacity-50`,
    },
    size: {
      default: ['text-base'],
      sm: ['text-small'],
      large: ['text-lg'],
      xxl: ['text-2xl'],
    },
    spacing: {
      default: ['py-1', 'px-3'],
      small: ['py-1', 'px-2'],
      large: ['py-2', 'px-4'],
      xxl: ['py-3', 'px-5'],
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
    wrapperType: {
      default: 'relative w-full min-w-[200px]',
    },
    labelType: {
      default: `py-0 px-0 text-gray-600 text-sm`,
    },
  },
  compoundVariants: [
    {
      inputType: 'default',
      wrapperType: 'default',
      labelType: 'default',
      size: 'default',
      spacing: 'default',
      rounded: 'default',
    },
  ],
  defaultVariants: {
    inputType: 'default',
    wrapperType: 'default',
    size: 'default',
    rounded: 'default',
    spacing: 'default',
  },
});
