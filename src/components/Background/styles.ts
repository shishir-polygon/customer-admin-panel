import styled from "styled-components";

interface IBackgroundImgProps {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  width: number;
  height?: number;
}

interface IBackgroundWrapperProps {
  paddingLeft: boolean;
}

export const BackgroundWrapper = styled.div<IBackgroundWrapperProps>`
  padding-left: ${({ paddingLeft }) => (paddingLeft ? 230 : 0)}px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img<IBackgroundImgProps>`
  position: fixed;
  z-index: -1;
  width: ${({ width }) => width}px;
  ${({ top }) => top && `top: ${top}px;`}
  ${({ left }) => left && `left: ${left}px;`}
  ${({ right }) => right && `right: ${right}px;`}
  ${({ bottom }) => bottom && `bottom: ${bottom}px;`}
  ${({ height }) => height && `height: ${height}px;`}
`;
