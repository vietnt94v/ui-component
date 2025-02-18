import React from "react";
import { ButtonProps } from "./Button.types";
import { TVariant, TSize } from "./Button.types";
import clsx from "clsx";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      {...props}
      className={clsx("transition rounded", {
        "bg-blue-500 hover:bg-blue-600 text-white": variant === "primary",
        "bg-gray-500 hover:bg-gray-600 text-white": variant === "secondary",
        "bg-red-500 hover:bg-red-600 text-white": variant === "danger",
        "bg-green-500 hover:bg-green-600 text-white": variant === "success",
        "bg-cyan-500 hover:bg-cyan-600 text-white": variant === "info",
        "bg-yellow-500 hover:bg-yellow-600 text-white": variant === "warning",
        "px-2 py-1": size === "sm",
        "px-4 py-2": size === "md",
        "px-6 py-3": size === "lg",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
