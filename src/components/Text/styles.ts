import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IUniversalTextProps {
  fontWeight?: string;
  lineHeight?: number;
  fontSize?: number;
  color?: string;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  maxWidth?: string;
  style?: string;
  bolder?: boolean;
}

export const UniversalText = styled.span<IUniversalTextProps>`
  display: inline-block;
  max-width: ${({ maxWidth = "100%" }) => maxWidth};
  font-weight: ${({ fontWeight = "bold" }) => fontWeight};
  font-size: ${({ fontSize = 15 }) => fontSize}px;
  color: ${({ color = colors.BLACK }) => color};
  line-height: ${({ lineHeight = 22 }) => lineHeight}px;
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  ${({ bolder }) => bolder && `text-shadow: 0px 0px 0.5px ${colors.BLACK};`}
  ${({ style }) => style};
`;
