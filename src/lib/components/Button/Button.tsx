
import React from 'react';
import styled from 'styled-components';
import type { ButtonProps } from './Button.types';
const StyledButton = styled.button<{ $bg?: string; $disabled?: boolean }>`
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(3)}`};
  font-weight: 600;
  background: ${({ $disabled, $bg, theme }) =>
    $disabled ? theme.colors.disabledBg : ($bg ?? theme.colors.primary)};
  color: ${({ $disabled, theme }) => ($disabled ? theme.colors.disabledText : '#fff')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  transition: filter 0.2s ease, transform 0.05s ease;

  &:hover {
    filter: ${({ $disabled }) => ($disabled ? 'none' : 'brightness(1.05)')};
  }

  &:active {
    transform: ${({ $disabled }) => ($disabled ? 'none' : 'scale(0.99)')};
  }

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
  min-height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 100%;
    font-size: 0.95rem;
  }
`;

export function Button({
  children = 'Button',
  disabled,
  bg,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      $bg={bg}
      $disabled={disabled}
      disabled={disabled}
      aria-disabled={disabled ? 'true' : undefined}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
