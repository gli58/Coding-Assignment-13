import React from 'react';
import styled from 'styled-components';
import type { DropdownProps } from './Dropdown.types';

const Box = styled.select<{ $bg?: string; $disabled?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  min-height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ $disabled, $bg, theme }) =>
    $disabled ? theme.colors.disabledBg : ($bg ?? theme.colors.bg)};
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.disabledText : theme.colors.text};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  opacity: ${({ $disabled }) => ($disabled ? 0.8 : 1)};
  transition:
    box-shadow 0.15s ease,
    border-color 0.15s ease;

  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.25);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 0.95rem;
  }
`;

export function Dropdown({
  options,
  bg,
  disabled,
  placeholder,
  value,
  defaultValue,
  ...rest
}: DropdownProps) {
  const safeOptions = Array.isArray(options) ? options : [];
  const isControlled = value !== undefined;

  const computedDefault =
    defaultValue !== undefined
      ? defaultValue
      : placeholder && !isControlled
        ? ''
        : undefined;

  return (
    <Box
      $bg={bg}
      $disabled={!!disabled}
      aria-disabled={disabled ? 'true' : undefined}
      disabled={disabled}
      value={value}
      defaultValue={computedDefault}
      aria-label={(rest as any)['aria-label'] || 'dropdown'}
      {...rest}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {safeOptions.length === 0 ? (
        <option value="" disabled>
          No options
        </option>
      ) : (
        safeOptions.map(o => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))
      )}
    </Box>
  );
}
