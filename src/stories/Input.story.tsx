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
    fieldSetClassName: 'group-focus-within:border-1',
  },
};

export const InputOne: Story = {};
