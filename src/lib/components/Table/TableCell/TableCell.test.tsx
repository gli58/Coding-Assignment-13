import React from 'react';
import { render, screen } from '@testing-library/react';
import { withTheme } from 'test-utils';
import { TableCell } from './TableCell';

test('cell visible', () => {
  render(
    withTheme(
      <table>
        <tbody>
          <tr>
            <TableCell>C</TableCell>
          </tr>
        </tbody>
      </table>
    )
  );
  expect(screen.getByText('C')).toBeVisible();
});

test('cell disabled attribute exists', () => {
  render(
    withTheme(
      <table>
        <tbody>
          <tr>
            <TableCell disabled>X</TableCell>
          </tr>
        </tbody>
      </table>
    )
  );
  const td = screen.getByText('X');
  expect(td).toHaveAttribute('aria-disabled', 'true');
});
