import type { Meta, StoryObj } from '@storybook/react';

import StatusUI from './statusUI';

const meta = {
  title: 'Components/StatusUI',
  component: StatusUI,
  tags: ['autodocs'],
  args: {
    type: 'Published',
  },
} satisfies Meta<typeof StatusUI>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCount: Story = {
  args: {
    type: 'Published',
    count: 5,
  },
};