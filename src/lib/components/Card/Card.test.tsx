import React from 'react';
import { render, screen } from '@testing-library/react';
import { withTheme } from '../../../test-utils';
import { Card } from './Card';

test('card title & content visible', () => {
  render(withTheme(<Card title="T">C</Card>));
  expect(screen.getByText('T')).toBeVisible();
  expect(screen.getByText('C')).toBeVisible();
});

test('card disabled attribute exists', () => {
  render(withTheme(<Card title="D" disabled />));
  const el = screen.getByText('D').closest('div');
  expect(el).toHaveAttribute('aria-disabled', 'true');
});
