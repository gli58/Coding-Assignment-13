import React from 'react';
import { render, screen } from '@testing-library/react';
import { withTheme } from '../../../test-utils';
import { Dropdown } from './Dropdown';

test('dropdown is visible', () => {
  render(withTheme(<Dropdown options={[{ label:'A', value:'a' }]} />));
  expect(screen.getByRole('combobox')).toBeVisible();
});

test('dropdown disabled attribute exists', () => {
  render(withTheme(<Dropdown options={[{ label:'A', value:'a' }]} disabled />));
  const el = screen.getByRole('combobox');
  expect(el).toHaveAttribute('aria-disabled', 'true');
});
