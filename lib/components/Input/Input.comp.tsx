import { forwardRef, InputHTMLAttributes } from 'react';
import { type VariantProps } from 'cva';
import { cm } from '../../utils';
import { inputStyles } from './Input.style';

export type TInputProps = {
  error?: boolean;
  valid?: boolean;
  label?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  inputClassName?: string;
  fieldSetClassName?: string;
  fieldSetForValueClassName?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputStyles>;

const Input = forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      id,
      inputType,
      disabled,
      error,
      valid,
      label,
      wrapperType,
      labelType,
      className,
      inputClassName,
      labelClassName,
      wrapperClassName,
      fieldSetClassName,
      fieldSetForValueClassName,
      type,
      compType = 'default',
      onChange,
      ...props
    },
    ref,
  ) => {
    const defaultOptions = {
      inputType: null,
      wrapperType: null,
      labelType: null,
      size: null,
      spacing: null,
    };

    return compType === 'anim' ? (
      <div
        className={cm(
          inputStyles({
            ...defaultOptions,
            wrapperType: wrapperType || compType,
          }),
          wrapperClassName,
        )}
      >
        <input
          className={cm(
            inputStyles({
              ...defaultOptions,
              inputType: inputType || compType,
            }),
            inputClassName,
            disabled &&
              inputStyles({ ...defaultOptions, inputState: 'disabledAnim' }),
          )}
          id={id}
          onChange={onChange}
          type={type}
          {...props}
          ref={ref}
        />
        {label && (
          <label
            className={cm(
              inputStyles({
                ...defaultOptions,
                labelType: labelType || compType,
              }),
              labelClassName,
            )}
            htmlFor={id}
          >
            {label}
          </label>
        )}

        {/* Focus. Transition */}
        <fieldset
          className={cm(
            inputStyles({
              fieldSet: 'default',
              inputType: null,
              spacing: null,
            }),
            error &&
              inputStyles({ ...defaultOptions, inputState: 'errorAnim' }),

            valid &&
              inputStyles({ ...defaultOptions, inputState: 'validAnim' }),

            fieldSetClassName,
          )}
        >
          <legend
            className='ml-2 px-0 text-sm transition-all duration-300 invisible max-w-[0.01px] group-focus-within:max-w-full 
          group-focus-within:px-1 whitespace-nowrap'
          >
            {label}
          </legend>
        </fieldset>

        {/* Value */}
        <fieldset
          className={cm(
            inputStyles({
              fieldSet: 'forValue',
              inputType: null,
              spacing: null,
            }),
            error &&
              inputStyles({ ...defaultOptions, inputState: 'errorAnim' }),

            valid &&
              inputStyles({ ...defaultOptions, inputState: 'validAnim' }),

            fieldSetForValueClassName,
          )}
        >
          <legend className='ml-2 text-sm invisible px-1 max-w-full whitespace-nowrap'>
            {label}
          </legend>
        </fieldset>
      </div>
    ) : (
      <div
        className={cm(
          inputStyles({
            ...defaultOptions,
            wrapperType: wrapperType || compType,
          }),
          wrapperClassName,
        )}
      >
        {label && (
          <label
            className={cm(
              inputStyles({
                ...defaultOptions,
                labelType: labelType || compType,
                inputState: error ? 'error' : null,
              }),
              labelClassName,
            )}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          className={cm(
            inputStyles({
              inputType: inputType || compType,
              labelType: null,
              wrapperType: null,
            }),
            error && inputStyles({ inputState: 'error' }),
            disabled && inputStyles({ inputState: 'disabled' }),
            valid && inputStyles({ ...defaultOptions, inputState: 'valid' }),
            inputClassName,
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
