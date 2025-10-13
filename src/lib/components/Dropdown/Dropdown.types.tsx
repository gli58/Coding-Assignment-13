import React from 'react';

export type DropdownOption = {
  label: string;
  value: string;
};

export interface DropdownProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: DropdownOption[];
  bg?: string;
  disabled?: boolean;
  placeholder?: string;
}