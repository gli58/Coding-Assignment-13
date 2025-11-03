import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Data/TableHeader',
  component: TableHeader,
};
export default meta;

type Story = StoryObj<typeof TableHeader>;
export const Default: Story = {
  args: {
    children: (
      <tr>
        <th>Header</th>
      </tr>
    ),
  },
};
export const Disabled: Story = {
  args: {
    children: (
      <tr>
        <th>Header</th>
      </tr>
    ),
    disabled: true,
  },
};
