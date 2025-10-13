import React from 'react';
import styled from 'styled-components';
import type { TableHeaderProps } from './TableHeader.types';

const Thead = styled.thead<{ $disabled?: boolean }>`
  background: ${({ theme }) => theme.colors.cardBg};
  color: ${({ $disabled, theme }) => $disabled ? theme.colors.disabledText : theme.colors.text};
`;

export function TableHeader({ disabled, children, ...rest }: TableHeaderProps) {
  return (
    <Thead $disabled={!!disabled} aria-disabled={disabled ? 'true' : undefined} {...rest}>
      {children}
    </Thead>
  );
}
