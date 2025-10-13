import React from 'react';
import { render, screen } from '@testing-library/react';
import { withTheme } from 'test-utils';
import { Button } from './Button';

test('button is visible', () => {
  render(withTheme(<Button>Submit</Button>));
  expect(screen.getByRole('button', { name: /submit/i })).toBeVisible();
});

test('button disabled attribute exists', () => {
  render(withTheme(<Button disabled>Disabled</Button>));
  const btn = screen.getByRole('button', { name: /disabled/i });
  expect(btn).toHaveAttribute('aria-disabled', 'true');
});
