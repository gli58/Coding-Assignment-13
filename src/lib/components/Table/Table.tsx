import React from 'react';
import styled from 'styled-components';
import type { TableProps } from './Table.types';

const StyledTable = styled.table<{ $disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  opacity: ${({ $disabled }) => ($disabled ? 0.85 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
`;

export function Table({ disabled, children, ...rest }: TableProps) {
  return (
    <StyledTable
      $disabled={!!disabled}
      aria-disabled={disabled ? 'true' : undefined}
      {...rest}
    >
      {children}
    </StyledTable>
  );
}
