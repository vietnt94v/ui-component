import { ReactNode } from "react";

export type Placement = "start" | "end" | "top" | "bottom";
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "full";
export type ColorPalette =
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "cyan"
  | "purple"
  | "pink"
  | "accent";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  colorPalette?: ColorPalette;
  size?: Size;
  placement?: Placement;
  contained?: boolean;
}
