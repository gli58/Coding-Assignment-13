export type RadioProps = {
  name: string;
  value?: string;
  label?: string;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
