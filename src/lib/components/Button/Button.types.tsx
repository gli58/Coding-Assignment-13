import type { ReactNode, CSSProperties, MouseEventHandler } from 'react';
export type ButtonType = 'button' | 'submit' | 'reset';
export interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  bg?: string;
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  'data-testid'?: string;
}
