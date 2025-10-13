import React from 'react';
import { render, screen } from '@testing-library/react';
import { withTheme } from 'test-utils';
import { TableFooter } from './TableFooter';

test('footer visible', () => {
  render(withTheme(<table><TableFooter><tr><td>F</td></tr></TableFooter></table>));
  expect(screen.getByText('F')).toBeVisible();
});

test('footer disabled attribute exists', () => {
  render(withTheme(<table><TableFooter disabled><tr><td>D</td></tr></TableFooter></table>));
  const tfoot = screen.getByText('D').closest('tfoot');
  expect(tfoot).toHaveAttribute('aria-disabled', 'true');
});
