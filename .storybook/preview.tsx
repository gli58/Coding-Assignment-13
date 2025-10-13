import type { Preview, Decorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';
import { GlobalStyles } from '../src/global';

const withTheme: Decorator = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{ padding: 16 }}>
      <Story />
    </div>
  </ThemeProvider>
);

const preview: Preview = {
  decorators: [withTheme],
  parameters: { controls: { expanded: true } },
};

export default preview;
