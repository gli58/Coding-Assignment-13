import React from 'react';
import { render, screen } from '@testing-library/react';
import { withTheme } from '../../../test-utils';
import { Radio } from './Radio';

test('radio is visible', () => {
  render(withTheme(<Radio name="g" label="Yes" />));
  expect(screen.getByText('Yes')).toBeVisible();
});

test('radio disabled attribute exists', () => {
  render(withTheme(<Radio name="g" label="No" disabled />));
  const label = screen.getByText('No').closest('label');
  expect(label).toHaveAttribute('aria-disabled', 'true');
});
