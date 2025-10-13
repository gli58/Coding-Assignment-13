// Simple text label with disabled style
import React from 'react';
import styled from 'styled-components';
import type { LabelProps } from './Label.types';

const Wrap = styled.label<{ $disabled?: boolean }>`
  display: inline-block;
  font-weight: 600;
  color: ${({ $disabled, theme }) => ($disabled ? theme.colors.disabledText : theme.colors.text)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
`;

export function Label({ children = 'Label', disabled, ...rest }: LabelProps) {
  return (
    <Wrap $disabled={!!disabled} aria-disabled={disabled ? 'true' : undefined} {...rest}>
      {children}
    </Wrap>
  );
}
