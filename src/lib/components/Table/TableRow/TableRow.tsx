import React from 'react';
import styled from 'styled-components';
import type { TableRowProps } from './TableRow.types';

const Tr = styled.tr<{ $disabled?: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.disabledText : theme.colors.text};
`;

export function TableRow({ disabled, children, ...rest }: TableRowProps) {
  return (
    <Tr
      $disabled={!!disabled}
      aria-disabled={disabled ? 'true' : undefined}
      {...rest}
    >
      {children}
    </Tr>
  );
}
