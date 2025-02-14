import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import { DrawerProps, ColorPalette, Size, Placement } from "./Drawer.types";

interface DrawerContainerProps {
  colorPalette: ColorPalette;
  size: Size;
  placement: Placement;
  contained: boolean;
  children: React.ReactNode;
  isClosing: boolean;
}

const colorMap: Record<ColorPalette, string> = {
  gray: "bg-gray-200",
  red: "bg-red-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-400",
  green: "bg-green-500",
  teal: "bg-teal-500",
  blue: "bg-blue-500",
  cyan: "bg-cyan-400",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  accent: "bg-purple-700",
};

const sizeMap: Record<Size, string> = {
  xs: "w-[200px]",
  sm: "w-[300px]",
  md: "w-[400px]",
  lg: "w-[600px]",
  xl: "w-[800px]",
  full: "w-screen",
};

// 🎯 DrawerContainer với hiệu ứng đóng
const DrawerContainer = ({
  colorPalette,
  size,
  placement,
  contained,
  children,
  isClosing,
}: DrawerContainerProps) => {
  return (
    <div
      className={clsx(
        "fixed overflow-y-auto shadow-lg transition-transform duration-300",
        colorMap[colorPalette],
        sizeMap[size],
        {
          "h-screen": !["top", "bottom"].includes(placement),
          "top-0": placement === "top",
          "bottom-0": placement === "bottom",
          "left-0": placement === "start",
          "right-0": placement === "end",
          "rounded-lg p-4": contained,
          "pointer-events-none": isClosing, // 🔥 Ngăn click và ẩn ngay khi bắt đầu đóng
          "animate-slideInTop": !isClosing && placement === "top",
          "animate-slideOutTop": isClosing && placement === "top",
          "animate-slideInBottom": !isClosing && placement === "bottom",
          "animate-slideOutBottom": isClosing && placement === "bottom",
          "animate-slideInLeft": !isClosing && placement === "start",
          "animate-slideOutLeft": isClosing && placement === "start",
          "animate-slideInRight": !isClosing && placement === "end",
          "animate-slideOutRight": isClosing && placement === "end",
        },
      )}
      onClick={e => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  colorPalette = "gray",
  size = "md",
  placement = "end",
  contained = false,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isRendered, setIsRendered] = useState(isOpen); // 🔥 Theo dõi trạng thái hiển thị

  // Khi `isOpen` thay đổi, cập nhật `isRendered`
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    }
  }, [isOpen]);

  // 🛠️ Đóng Drawer với hiệu ứng thoát
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsRendered(false); // 🔥 Chỉ unmount sau khi animation kết thúc
      onClose();
    }, 300);
  }, [onClose]);

  // 🛠️ Đóng bằng phím ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isRendered) return null; // 🔥 Chỉ render nếu cần

  return ReactDOM.createPortal(
    <div
      className={clsx(
        "fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50 transition-opacity duration-300",
        { "opacity-0 pointer-events-none": isClosing }, // 🔥 Ngăn click và làm mờ trước khi unmount
      )}
      onClick={handleClose}
    >
      <DrawerContainer
        colorPalette={colorPalette}
        size={size}
        placement={placement}
        contained={contained}
        isClosing={isClosing}
      >
        {children}
      </DrawerContainer>
    </div>,
    document.body,
  );
};

export default Drawer;
