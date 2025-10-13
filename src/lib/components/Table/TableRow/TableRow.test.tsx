import React from 'react';
import { render, screen } from '@testing-library/react';
import { withTheme } from 'test-utils';
import { TableRow } from './TableRow';

test('row visible', () => {
  render(withTheme(<table><tbody><TableRow><td>R</td></TableRow></tbody></table>));
  expect(screen.getByText('R')).toBeVisible();
});

test('row disabled attribute exists', () => {
  render(withTheme(<table><tbody><TableRow disabled><td>D</td></TableRow></tbody></table>));
  const tr = screen.getByText('D').closest('tr');
  expect(tr).toHaveAttribute('aria-disabled', 'true');
});
