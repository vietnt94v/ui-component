import React from "react";
import { ButtonProps } from "./Button.types";
import { ButtonContainer } from "./Button.styled";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  ...props
}) => {
  return (
    <ButtonContainer
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
