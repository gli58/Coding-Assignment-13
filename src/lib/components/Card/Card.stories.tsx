import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    bg: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: { title: 'Title', children: 'Body content' },
};

export const CustomBg: Story = {
  args: { title: 'Custom', bg: '#eef2ff', children: 'Custom background' },
};

export const Disabled: Story = {
  args: { title: 'Disabled', disabled: true, children: 'Muted content' },
};
