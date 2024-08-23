import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../lib/components/Input/Input.comp';

const meta = {
  title: 'Component/Input',
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
