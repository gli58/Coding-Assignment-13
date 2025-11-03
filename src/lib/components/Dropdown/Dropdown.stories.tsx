import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import type { DropdownOption } from './Dropdown.types';

const meta: Meta<typeof Dropdown> = {
  title: 'Form/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object', description: 'Array of {label, value}' },
    bg: { control: 'color' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: {
      control: 'text',
      description:
        'Controlled value. Leave empty to use defaultValue/placeholder.',
    },
  },
  args: {
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
    ] as DropdownOption[],
    placeholder: 'Please select',
    disabled: false,
    bg: undefined,
    value: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};

export const Controlled: Story = {
  args: {
    value: 'banana',
  },
};
