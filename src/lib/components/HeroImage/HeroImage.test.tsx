import React from 'react';
import { render, screen } from '@testing-library/react';
import { withTheme } from '../../../test-utils';
import { HeroImage } from './HeroImage';

test('hero title is visible', () => {
  render(withTheme(<HeroImage src="x.jpg" title="Hello" />));
  expect(screen.getByText('Hello')).toBeVisible();
});

test('hero disabled attribute exists', () => {
  render(withTheme(<HeroImage src="x.jpg" title="T" disabled />));
  const el = screen.getByText('T').closest('section');
  expect(el).toHaveAttribute('aria-disabled', 'true');
});
