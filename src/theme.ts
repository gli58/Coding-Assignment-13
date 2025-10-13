// Minimal theme for all components
export const theme = {
  colors: {
    primary: '#2563eb',
    text: '#111827',
    bg: '#ffffff',
    border: '#e5e7eb',
    cardBg: '#f9fafb',
    disabledBg: '#e5e7eb',
    disabledText: '#9ca3af',
  },
  radius: '8px',
  spacing: (n: number) => `${4 * n}px`,
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
  },
};

export type AppTheme = typeof theme;
