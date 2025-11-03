// Paragraph text with optional color and disabled state
import React from 'react';
import styled from 'styled-components';
import type { TextProps } from './Text.types';

const P = styled.p<{ $disabled?: boolean; $color?: string }>`
  margin: 0;
  color: ${({ $disabled, theme, $color }) =>
    $disabled ? theme.colors.disabledText : ($color ?? theme.colors.text)};
  line-height: 1.5;
`;

export function Text({
  children = 'Text',
  color,
  disabled,
  ...rest
}: TextProps) {
  return (
    <P
      $disabled={!!disabled}
      $color={color}
      aria-disabled={disabled ? 'true' : undefined}
      {...rest}
    >
      {children}
    </P>
  );
}
