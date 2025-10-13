import React from 'react';
import styled from 'styled-components';
import type { TableFooterProps } from './TableFooter.types';

const Tfoot = styled.tfoot<{ $disabled?: boolean }>`
  background: ${({ theme }) => theme.colors.cardBg};
  color: ${({ $disabled, theme }) => $disabled ? theme.colors.disabledText : theme.colors.text};
`;

export function TableFooter({ disabled, children, ...rest }: TableFooterProps) {
  return (
    <Tfoot $disabled={!!disabled} aria-disabled={disabled ? 'true' : undefined} {...rest}>
      {children}
    </Tfoot>
  );
}
