// Basic image with optional disabled styles
import React from 'react';
import styled from 'styled-components';
import type { ImgProps } from './Img.types';

const StyledImg = styled.img<{ $disabled?: boolean }>`
  display: block;
  max-width: 100%;
  height: auto;
  filter: ${({ $disabled }) =>
    $disabled ? 'grayscale(1) brightness(0.85)' : 'none'};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  border-radius: ${({ theme }) => theme.radius};
`;

export function Img({ disabled, alt = 'image', ...rest }: ImgProps) {
  return (
    <StyledImg
      $disabled={!!disabled}
      aria-disabled={disabled ? 'true' : undefined}
      alt={alt}
      {...rest}
    />
  );
}
