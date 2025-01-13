import React from "react";
import { ButtonProps } from "./Button.types";
import { ButtonContainer } from "./Button.styled";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  disabled = false,
  ...rest
}) => {
  return (
    <ButtonContainer
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
