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
    onClick: () => {
      window.console.log('Button clicked');
    },
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    buttonType: 'secondary',
    onClick: () => {
      window.console.log('Button clicked');
    },
    label: 'Secondary',
  },
};

export const Outline: Story = {
  args: {
    buttonType: 'outline',
    onClick: () => {
      window.console.log('Button clicked');
    },
    label: 'Outline',
  },
};

export const WithIcon: Story = {
  args: {
    buttonType: 'primary',
    leftIcon: <span>👈</span>,
    label: 'With Icon',
  },
};

export const LinkButton: Story = {
  args: {
    label: 'With Icon',
    asChild: true,
    children: <a href='http://link'>Redirect</a>,
  },
};
