import React from 'react';
import { render, screen } from '@testing-library/react';
import { withTheme } from '../../../test-utils';
import { Text } from './Text';

test('text is visible', () => {
  render(withTheme(<Text>Hello world</Text>));
  expect(screen.getByText('Hello world')).toBeVisible();
});

test('text disabled attribute exists', () => {
  render(withTheme(<Text disabled>Muted</Text>));
  const el = screen.getByText('Muted');
  expect(el).toHaveAttribute('aria-disabled', 'true');
});
