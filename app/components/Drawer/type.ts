import { ReactNode } from "react";

export type TPlacement = "start" | "end" | "top" | "bottom";
export type TSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: TSize;
  placement?: TPlacement;
}
