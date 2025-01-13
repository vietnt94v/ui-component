import { ReactNode, ButtonHTMLAttributes } from "react";

export type TVariant = "primary" | "secondary" | "danger";
export type TSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: TVariant;
  size?: TSize;
  fullWidth?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
