import { forwardRef } from 'react';
import { TInputProps } from './Input.type';
import { cm } from '../../utils';
import { inputStyles } from './Input.style';

const Input = forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      id,
      inputType,
      label,
      wrapperType,
      labelType,
      className,
      labelClassName,
      wrapperClassName,
      type,
      onChange,
      ...props
    },
    ref,
  ) => {
    return (
      <div>
        {label && (
          <label
            className={cm(
              inputStyles({
                labelType,
                inputType: null,
                spacing: null,
              }),
            )}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          className={cm(
            inputStyles({ inputType, wrapperType: null, labelType: null }),
            className,
          )}
          id={id}
          onChange={onChange}
          type={type}
          {...props}
          ref={ref}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
