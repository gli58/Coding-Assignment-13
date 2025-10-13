import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Typography/Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = { args: { children: 'Name' } };
export const Disabled: Story = { args: { children: 'Name', disabled: true } };
