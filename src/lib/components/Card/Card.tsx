import React from 'react';
import styled from 'styled-components';
import type { CardProps } from './Card.types';

const Box = styled.div<{ $disabled?: boolean; $bg?: string }>`
  background: ${({ $bg, theme }) => $bg ?? theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  padding: ${({ theme }) => theme.spacing(3)};
  color: ${({ $disabled, theme }) => ($disabled ? theme.colors.disabledText : theme.colors.text)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  transition: all 0.2s ease;
  max-width: 100%;
  box-sizing: border-box;

  &:hover {
    filter: ${({ $disabled }) => ($disabled ? 'none' : 'brightness(1.03)')};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 1rem;
  }
`;

export function Card({ title = 'Card', children, bg, disabled }: CardProps) {
  return (
    <Box
      $bg={bg}
      $disabled={!!disabled}
      aria-disabled={disabled ? 'true' : undefined}
    >
      {title && <Title>{title}</Title>}
      <div>{children}</div>
    </Box>
  );
}
