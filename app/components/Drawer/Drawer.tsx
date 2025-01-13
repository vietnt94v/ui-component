import React from "react";
import {
  Backdrop,
  DrawerBody,
  DrawerCloseButton,
  DrawerContainer,
  DrawerFooter,
  DrawerHeader,
} from "./DrawerStyled";
import { DrawerProps } from "./type";
import CloseIcon from "../icons/CloseIcon";

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  size = "md",
  placement = "end",
}) => {
  if (!isOpen) return null;

  return (
    <>
      <Backdrop onClick={onClose} />
      <DrawerContainer size={size} placement={placement}>
        <DrawerCloseButton onClick={onClose}>
          <CloseIcon />
        </DrawerCloseButton>
        <DrawerHeader className="px-3">Title</DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
        <DrawerFooter></DrawerFooter>
      </DrawerContainer>
    </>
  );
};

export default Drawer;
