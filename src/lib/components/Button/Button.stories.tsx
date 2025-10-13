import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  argTypes: { bg: { control: 'color' }, disabled: { control: 'boolean' }, children: { control: 'text' } }
};
export default meta;

type Story = StoryObj<typeof Button>;
export const Default: Story = { args: { children: 'Primary' } };
export const CustomColor: Story = { args: { children: 'Custom', bg: '#10b981' } };
export const Disabled: Story = { args: { children: 'Disabled', disabled: true } };
