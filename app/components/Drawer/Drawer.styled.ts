import styled, { keyframes, css } from "styled-components";
import { TSize, TPlacement } from "./Drawer.types";
import { themeColors } from "@/app/themes/colors";

const slideInEnd = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInStart = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInTop = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideInBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

interface DrawerContainerProps {
  size: TSize;
  placement: TPlacement;
}

const sizeMap: Record<TSize, string> = {
  xs: "200px",
  sm: "300px",
  md: "400px",
  lg: "600px",
  xl: "800px",
  full: "100vw",
};

// Backdrop
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const DrawerContainer = styled.div<DrawerContainerProps>`
  position: fixed;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 1010;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  ${({ size, placement }) =>
    css`
      width: ${["top", "bottom"].includes(placement) ? "100vw" : sizeMap[size]};
      height: ${["top", "bottom"].includes(placement)
        ? sizeMap[size]
        : "100vh"};
    `}

  ${({ placement }) =>
    placement === "start" &&
    css`
      left: 0;
      top: 0;
      animation: ${slideInStart} 0.3s ease-out;
    `}

  ${({ placement }) =>
    placement === "end" &&
    css`
      right: 0;
      top: 0;
      animation: ${slideInEnd} 0.3s ease-out;
    `}

  ${({ placement }) =>
    placement === "top" &&
    css`
      top: 0;
      left: 0;
      animation: ${slideInTop} 0.3s ease-out;
    `}
      
      ${({ placement }) =>
    placement === "bottom" &&
    css`
      bottom: 0;
      left: 0;
      animation: ${slideInBottom} 0.3s ease-out;
    `}
`;

export const DrawerHeader = styled.div`
  display: block;
  font-size: 1.5rem;
`;

export const DrawerBody = styled.div`
  flex: 1;
`;

export const DrawerFooter = styled.div`
  display: block;
`;

export const DrawerCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px;
  background-color: transparent;
  border: 1px solid ${themeColors?.gray};
  border-radius: 4px;
`;
