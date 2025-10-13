import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Data/TableRow',
  component: TableRow,
};
export default meta;

type Story = StoryObj<typeof TableRow>;
export const Default: Story = { args: { children: <td>Row</td> } };
export const Disabled: Story = { args: { children: <td>Row</td>, disabled: true } };
