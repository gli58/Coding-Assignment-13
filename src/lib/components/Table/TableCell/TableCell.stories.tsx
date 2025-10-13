import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Data/TableCell',
  component: TableCell,
  argTypes: { disabled: { control: 'boolean' } },
};
export default meta;

type Story = StoryObj<typeof TableCell>;
export const Default: Story = { args: { children: 'Cell' } };
export const Disabled: Story = { args: { children: 'Cell', disabled: true } };
