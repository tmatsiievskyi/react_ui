import { forwardRef, InputHTMLAttributes } from 'react';
import { type VariantProps } from 'cva';
import { cm } from '../../utils';
import { inputStyles } from './Input.style';

export type TInputProps = {
  label?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  fieldSetClassName?: string;
  fieldSetForValueClassName?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputStyles>;

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
      fieldSetClassName,
      fieldSetForValueClassName,
      type,
      onChange,
      ...props
    },
    ref,
  ) => {
    return inputType === 'anim' ? (
      <div className='relative m-4 max-w-[fit-content] group'>
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

        {inputType === 'anim' && (
          <>
            {/* Focus. Transition */}
            <fieldset
              className={cm(
                inputStyles({
                  fieldSet: 'default',
                  inputType: null,
                  spacing: null,
                }),
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
                fieldSetForValueClassName,
              )}
            >
              <legend className='ml-2 text-sm invisible px-1 max-w-full whitespace-nowrap'>
                {label}
              </legend>
            </fieldset>
          </>
        )}
      </div>
    ) : (
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
