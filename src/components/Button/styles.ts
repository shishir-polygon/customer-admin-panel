import styled, { keyframes } from "styled-components";

import { colors } from "../../utils/colors";
import { ButtonStylePreset } from "../../utils/types";

interface IButtonTextProps {
  preset?: ButtonStylePreset;
}
interface IButtonWrapperProps extends IButtonTextProps {
  marginLeft?: number;
  center?: boolean;
  marginBottom?: number;
  marginTop?: number;
  width?: string;
}

const pendulum = keyframes`
  0% {
   top: -15px;
  }
  50% {
    top: 40px;
  }
  100% {
    top: -15px;
  }
 `;

const pendulum2 = keyframes`
  0% {
    bottom: -15px;
  }
  50% {
    bottom: 40px;
  }
  100% {
    bottom: -15px;
  }
`;

export const ButtonWrapper = styled.button<IButtonWrapperProps>`
  display: block;
  cursor: pointer;
  border: none;
  transition: all 0.5s linear;

  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  margin-left: ${({ marginLeft = 0 }) => marginLeft}px;
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  ${({ center }) => center && `margin: 0 auto;`}
  ${({
    preset = ButtonStylePreset.BaseButtonWithBackground,
    width = "200px",
  }) => {
    switch (preset) {
      case ButtonStylePreset.BaseButtonWithBackground:
        return `
        width: ${width};
        height: 40px;
        background-color: ${colors.KILLARNEY};
        border-radius: 100px;
        `;
      case ButtonStylePreset.EditButton:
        return `
        background: transparent;
        `;
      case ButtonStylePreset.AttentionalButton:
        return `
        width: ${width};
        height: 40px;
        color: ${colors.WHITE};
        background-color: ${colors.MONA_LISA};
        border-radius: 10px;
        `;
      case ButtonStylePreset.AnimationButton:
        return `
          background: transparent;
          position: relative;
          `;
      default:
        break;
    }
  }}

  
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `};
`;

export const ButtonText = styled.span<IButtonTextProps>`
  ${({ preset = ButtonStylePreset.BaseButtonWithBackground }) => {
    switch (preset) {
      case ButtonStylePreset.BaseButtonWithBackground:
        return `
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: ${colors.WHITE};
        `;
      case ButtonStylePreset.EditButton:
        return `
        font-weight: bold;
        font-size: 15px;
        line-height: 22px;
        text-decoration-line: underline;
        color: ${colors.SILVER_CHALICE};
        `;
      case ButtonStylePreset.AnimationButton:
        return `
          color: ${colors.MONA_LISA};
          font-size: 35px;

          &:hover {
            color: ${colors.KILLARNEY};
          }
        `;
      default:
        break;
    }
  }}

  text-align: center;
`;

export const AnimationElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:hover {
    &:before {
      width: 100%;
      height: 100%;
      top: 10px;
      left: 10px;
      animation: none;
      border-radius: 0;
      background: ${colors.JADE};
    }

    &:after {
      width: 100%;
      height: 100%;
      animation: none;
      border-radius: 0;
      background: ${colors.BROOM};
    }
  }

  &:before {
    position: absolute;
    content: "";
    top: -15px;
    left: -25px;
    width: 20px;
    height: 20px;
    background: #ff9d6b;
    border-radius: 50%;
    animation: ${pendulum} 3s ease infinite;
    z-index: -2;
    transition: all 0.5s ease;
  }

  &:after {
    position: absolute;
    content: "";
    bottom: 0;
    right: -25px;
    width: 20px;
    height: 20px;
    background: #fc5e32;
    border-radius: 50%;
    animation: ${pendulum2} 3s ease infinite;
    z-index: -1;
    transition: all 0.5s ease;
  }
`;
