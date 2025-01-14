import styled, { css } from "styled-components";
import { TVariant, TSize } from "./Button.types";
import { themeColors } from "@/app/themes/colors";

const sizeStyles: Record<TSize, ReturnType<typeof css>> = {
  sm: css`
    font-size: 12px;
    padding: 5px 10px;
  `,
  md: css`
    font-size: 16px;
    padding: 10px 20px;
  `,
  lg: css`
    font-size: 20px;
    padding: 15px 30px;
  `,
};

const variantStyles: Record<TVariant, ReturnType<typeof css>> = {
  primary: css`
    background-color: ${themeColors?.blue};
    color: white;
    &:hover {
      background-color: ${themeColors?.teal};
    }
  `,
  secondary: css`
    background-color: ${themeColors?.gray};
    color: black;
    &:hover {
      background-color: ${themeColors?.orange};
    }
  `,
  danger: css`
    background-color: ${themeColors?.red};
    color: white;
    &:hover {
      background-color: ${themeColors?.pink};
    }
  `,
};

export const ButtonContainer = styled.button<{
  variant?: TVariant;
  size?: TSize;
}>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  ${({ size }) => size && sizeStyles[size]}
  ${({ variant }) => variant && variantStyles[variant]}

  &:disabled {
    background-color: ${themeColors?.gray};
    color: #666;
    cursor: not-allowed;
    &:hover {
      background-color: ${themeColors?.gray};
    }
  }
`;
