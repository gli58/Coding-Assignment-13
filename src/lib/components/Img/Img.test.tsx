import React from 'react';
import { render, screen } from '@testing-library/react';
import { withTheme } from '../../../test-utils';
import { Img } from './Img';

test('img is visible', () => {
  render(withTheme(<Img src="x.jpg" alt="Demo" />));
  expect(screen.getByRole('img', { name: /demo/i })).toBeVisible();
});

test('img disabled attribute exists', () => {
  render(withTheme(<Img src="x.jpg" alt="X" disabled />));
  const el = screen.getByRole('img', { name: /x/i });
  expect(el).toHaveAttribute('aria-disabled', 'true');
});
