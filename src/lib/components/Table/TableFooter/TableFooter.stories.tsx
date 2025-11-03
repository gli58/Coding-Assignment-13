import type { Meta, StoryObj } from '@storybook/react';
import { TableFooter } from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Data/TableFooter',
  component: TableFooter,
};
export default meta;

type Story = StoryObj<typeof TableFooter>;
export const Default: Story = {
  args: {
    children: (
      <tr>
        <td>Footer</td>
      </tr>
    ),
  },
};
export const Disabled: Story = {
  args: {
    children: (
      <tr>
        <td>Footer</td>
      </tr>
    ),
    disabled: true,
  },
};
