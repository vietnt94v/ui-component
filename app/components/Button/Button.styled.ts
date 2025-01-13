import styled, { css } from "styled-components";
import { TSize, TVariant } from "./Button.types";

interface ButtonContainerProps {
  variant: TVariant;
  size: TSize;
  fullWidth?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 1px solid gray;
  border-radius: 4px;
  backgound-color: white;
`;
