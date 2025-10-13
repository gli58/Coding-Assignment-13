import React from 'react';
import { render, screen } from '@testing-library/react';
import { withTheme } from 'test-utils';
import { TableHeader } from './TableHeader';

test('header visible', () => {
  render(withTheme(<table><TableHeader><tr><th>H</th></tr></TableHeader></table>));
  expect(screen.getByText('H')).toBeVisible();
});

test('header disabled attribute exists', () => {
  render(withTheme(<table><TableHeader disabled><tr><th>D</th></tr></TableHeader></table>));
  const thead = screen.getByText('D').closest('thead');
  expect(thead).toHaveAttribute('aria-disabled', 'true');
});
