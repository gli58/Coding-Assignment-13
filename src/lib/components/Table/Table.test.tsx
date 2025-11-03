import React from 'react';
import { render, screen } from '@testing-library/react';
import { withTheme } from 'test-utils';
import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';

test('table content visible', () => {
  render(
    withTheme(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>ID</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>1</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>F</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  );
  expect(screen.getByText('ID')).toBeVisible();
  expect(screen.getByText('1')).toBeVisible();
  expect(screen.getByText('F')).toBeVisible();
});

test('table cell disabled attribute exists', () => {
  render(
    withTheme(
      <table>
        <tbody>
          <TableRow>
            <TableCell disabled>X</TableCell>
          </TableRow>
        </tbody>
      </table>
    )
  );
  const td = screen.getByText('X');
  expect(td).toHaveAttribute('aria-disabled', 'true');
});
