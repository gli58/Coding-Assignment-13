// Large banner image with title overlay
import React from 'react';
import styled from 'styled-components';
import type { HeroImageProps } from './HeroImage.types';

const Wrap = styled.section<{ $h: number; $disabled?: boolean }>`
  position: relative;
  height: ${({ $h }) => `${$h}px`};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  filter: ${({ $disabled }) => ($disabled ? 'grayscale(1) brightness(0.85)' : 'none')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
`;

const Bg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Title = styled.h1`
  position: absolute;
  left: 16px;
  bottom: 16px;
  margin: 0;
  color: white;
  text-shadow: 0 2px 6px rgba(0,0,0,.35);
`;

export function HeroImage({ src, title = 'Hero', height = 280, disabled }: HeroImageProps) {
  return (
    <Wrap $h={height} $disabled={!!disabled} aria-disabled={disabled ? 'true' : undefined}>
      <Bg src={src} alt={title} />
      {title && <Title>{title}</Title>}
    </Wrap>
  );
}
