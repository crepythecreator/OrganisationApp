import type { Meta, StoryObj } from '@storybook/react';

import StatusBarUI from './statusBarUI';

const meta = {
  title: 'Components/StatusBarUI',
  component: StatusBarUI,
  tags: ['autodocs'],
  args: {
    sold: 50,
    total: 190
  },
} satisfies Meta<typeof StatusBarUI>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
  decorators: [
    (Story) => (
      <Story />
    ),
  ],
};

