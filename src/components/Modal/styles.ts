import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IModalContent extends IModalWrapperProps {
  height?: number;
  contentMaxWidth?: string;
}

interface IModalWrapperProps {
  active: boolean;
}

interface ICloseProps {
  isMapsModal?: boolean;
}

export const ModalWrapper = styled.div<IModalWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100vw;
  height: 100vh;
  background: ${colors.MINE_SHAFT}CC;
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.5s ease-out;
  opacity: 0;
  pointer-events: none;
  ${({ active }) =>
    active &&
    `
    transform: scale(1);
    transition: all 0.5s ease-out;
    opacity: 1;
    pointer-events: all;
    `}
`;

export const ModalContent = styled.div<IModalContent>`
  position: relative;
  min-height: ${({ height = 274 }) => height}px;
  min-width: 420px;
  max-width: ${({ contentMaxWidth = "90vw" }) => contentMaxWidth};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.WHITE};
  border-radius: 20px;
  transform: scale(0.5);
  transition: 0.5s;

  ${({ active }) =>
    active &&
    `
    transform: scale(1);
    transition: 0.5s;
    `}
`;

export const Close = styled.div<ICloseProps>`
  cursor: pointer;

  &:before {
    position: absolute;
    content: "";
    top: -10px;
    right: -10px;
    transform: rotate(45deg);
    width: 2px;
    height: 20px;
    background: ${colors.WHITE};
  }

  &:after {
    position: absolute;
    content: "";
    top: -10px;
    right: -10px;
    transform: rotate(-45deg);
    width: 2px;
    height: 20px;
    background: ${colors.WHITE};
  }
`;
