import { InputHTMLAttributes } from 'react';
import { type VariantProps } from 'cva';
import { inputStyles } from './Input.style';

export type TInputProps = {
  label?: string;
  labelClassName?: string;
  wrapperClassName?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputStyles>;

// export interface TInputProps
//   extends VariantProps<typeof inputStyles>,
//     InputHTMLAttributes<HTMLInputElement> {
//   asd: boolean;

//   ddd: string;
// }
