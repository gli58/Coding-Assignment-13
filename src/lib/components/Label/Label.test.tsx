import React from 'react';
import { render, screen } from '@testing-library/react';
import { withTheme } from '../../../test-utils';
import { Label } from './Label';

test('label is visible', () => {
  render(withTheme(<Label>Name</Label>));
  expect(screen.getByText('Name')).toBeVisible();
});

test('label shows disabled styles', () => {
  render(withTheme(<Label disabled>Disabled Label</Label>));
  const el = screen.getByText('Disabled Label');
  expect(el).toHaveAttribute('aria-disabled', 'true');
});
