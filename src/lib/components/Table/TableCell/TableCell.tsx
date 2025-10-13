import React from 'react';
import styled from 'styled-components';
import type { TableCellProps } from './TableCell.types';

const Td = styled.td<{ $disabled?: boolean }>`
  padding: ${({ theme }) => theme.spacing(2)};
  color: ${({ $disabled, theme }) => $disabled ? theme.colors.disabledText : theme.colors.text};
`;

export function TableCell({ disabled, children, ...rest }: TableCellProps) {
  return (
    <Td $disabled={!!disabled} aria-disabled={disabled ? 'true' : undefined} {...rest}>
      {children}
    </Td>
  );
}
