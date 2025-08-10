import styled from "styled-components";

import { colors } from "../../utils/colors";

interface ICommonTitleProps {
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
  fontWeight?: string;
  lineHeight?: number;
  color?: string;
  textAlign?: "center" | "left" | "right";
  bolder?: boolean;
}

export const CommonTitle = styled.p<ICommonTitleProps>`
  font-size: ${({ fontSize = 30 }) => fontSize}px;
  margin-top: ${({ marginTop = 20 }) => marginTop}px;
  margin-bottom: ${({ marginBottom = 10 }) => marginBottom}px;
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  line-height: ${({ lineHeight = 44 }) => lineHeight}px;
  color: ${({ color = colors.BLACK }) => color};
  text-align: ${({ textAlign = "Left" }) => textAlign};
  ${({ bolder }) => bolder && `text-shadow: 0px 0px 0.5px ${colors.BLACK};`}
`;
