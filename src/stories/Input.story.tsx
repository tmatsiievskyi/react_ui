import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../lib/components/Input/Input.comp';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputType: 'default',
    wrapperType: 'default',
    placeholder: 'Default',
    labelType: 'default',
    label: 'Default',
    className: '',
    value: 'asd',
  },
};

export const DefaultValid: Story = {
  args: {
    inputType: 'default',
    wrapperType: 'default',
    placeholder: 'Default',
    labelType: 'default',
    label: 'Default',
    className: '',
    valid: true,
  },
};

export const DefaultDisabled: Story = {
  args: {
    inputType: 'default',
    wrapperType: 'default',
    placeholder: 'Default',
    labelType: 'default',
    label: 'Default',
    className: '',
    disabled: true,
  },
};

export const DefaultError: Story = {
  args: {
    inputType: 'default',
    wrapperType: 'default',
    placeholder: 'Default',
    labelType: 'default',
    label: 'Default',
    className: '',
    error: true,
  },
};

export const Anim: Story = {
  args: {
    compType: 'anim',
    inputType: 'anim',
    labelType: 'anim',
    wrapperType: 'anim',
    wrapperClassName: 'w-full',
    label: 'Login',
    placeholder: ' ',
  },
};

export const AnimDisabled: Story = {
  args: {
    compType: 'anim',
    inputType: 'anim',
    labelType: 'anim',
    wrapperType: 'anim',
    wrapperClassName: 'w-full',
    label: 'Login',
    placeholder: ' ',
    disabled: true,
  },
};

export const AnimError: Story = {
  args: {
    compType: 'anim',
    inputType: 'anim',
    labelType: 'anim',
    wrapperType: 'anim',
    wrapperClassName: 'w-full',
    label: 'Login',
    placeholder: ' ',
    error: true,
  },
};

export const AnimValid: Story = {
  args: {
    compType: 'anim',
    inputType: 'anim',
    labelType: 'anim',
    wrapperType: 'anim',
    wrapperClassName: 'w-full',
    label: 'Login',
    placeholder: ' ',
    valid: true,
  },
};

export const InputOne: Story = {};
