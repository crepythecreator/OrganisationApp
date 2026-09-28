import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: () => console.log('Button clicked'),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Save: Story = {
  args: {
    type: 'save',
  },
};

export const Publish: Story = {
  args: {
    type: 'publish',
  },
};

export const Copy: Story = {
  args: {
    type: 'copy',
  },
};

export const Cancel: Story = {
  args: {
    type: 'cancel',
  },
};

export const Details: Story = {
  args: {
    type: 'details',
  },
};

export const Delete: Story = {
  args: {
    type: 'delete',
  },
};
