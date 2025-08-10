import styled from "styled-components";

interface IUniversalImgProps {
  width?: number | string;
  height?: number | string;
  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
  marginBottom?: number;
  cursor?: string;
  borderRadius?: number;
}

export const UniversalImg = styled.img<IUniversalImgProps>`
  ${({ width }) =>
    width && `max-width: ${typeof width === "string" ? width : width + "px"}`};
  ${({ height }) =>
    height && `height: ${typeof height === "string" ? height : height + "px"}`};
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}px`};
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}px`};
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px`};
  cursor: ${({ cursor = "default" }) => cursor};
  border-radius: ${({ borderRadius = 5 }) => borderRadius}px;
`;
