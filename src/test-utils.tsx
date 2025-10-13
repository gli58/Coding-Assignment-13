import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const withTheme = (node: React.ReactNode) => (
  <ThemeProvider theme={theme}>{node}</ThemeProvider>
);
