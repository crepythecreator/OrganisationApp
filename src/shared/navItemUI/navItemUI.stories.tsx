import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import NavItemUI from './navItemUI';

const meta = {
  title: 'Components/NavItemUI',
  component: NavItemUI,
  tags: ['autodocs'],
  args: {
    index: 1,
    title: 'Главная',
    path: 'home',
  },
} satisfies Meta<typeof NavItemUI>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/home']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Inactive: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/other']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const WithCount: Story = {
  args: {
    count: 5,
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/other']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};
