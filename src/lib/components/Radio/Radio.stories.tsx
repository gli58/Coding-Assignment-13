import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Inputs/Radio',
  component: Radio,
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = { args: { name: 'group', label: 'Yes' } };
export const Disabled: Story = {
  args: { name: 'group', label: 'No', disabled: true },
};
