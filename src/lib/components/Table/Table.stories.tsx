import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';

const meta: Meta<typeof Table> = {
  title: 'Data/Table',
  component: Table,
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Basic: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Alice</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>1 row</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
