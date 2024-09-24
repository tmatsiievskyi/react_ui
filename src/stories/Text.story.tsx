import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../lib/main';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: 'xl',
    color: 'primary',
    children: '123',
  },
};
