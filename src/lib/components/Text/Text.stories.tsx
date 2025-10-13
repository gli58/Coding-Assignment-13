import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    children: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = { args: { children: 'Hello world' } };
export const CustomColor: Story = { args: { children: 'Custom color', color: '#10b981' } };
export const Disabled: Story = { args: { children: 'Muted text', disabled: true } };
