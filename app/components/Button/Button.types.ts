import { ReactNode, ButtonHTMLAttributes } from "react";

export type TVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "info"
  | "warning";
export type TSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: TVariant;
  size?: TSize;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
