import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../lib/main';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    onClick: () => {
      window.console.log('Button clicked');
    },
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    buttonType: 'secondary',
    onClick: () => {
      window.console.log('Button clicked');
    },
  },
};
