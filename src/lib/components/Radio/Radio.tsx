// Labeled radio with disabled styles
import React from 'react';
import styled from 'styled-components';
import type { RadioProps } from './Radio.types';

const Wrap = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.disabledText : theme.colors.text};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

export function Radio({
  name,
  value,
  label = 'Option',
  disabled,
  ...rest
}: RadioProps) {
  return (
    <Wrap $disabled={!!disabled} aria-disabled={disabled ? 'true' : undefined}>
      <input
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        {...rest}
      />
      <span>{label}</span>
    </Wrap>
  );
}
