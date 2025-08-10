import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IHeadingProps {
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  textAlign?: "left" | "right" | "center";
  width?: string;
  bolder?: boolean;
}

export const SecondLvlHeading = styled.h2<IHeadingProps>`
  font-size: ${({ fontSize = 40 }) => fontSize}px;
  margin-top: ${({ marginTop = 20 }) => marginTop}px;
  margin-bottom: ${({ marginBottom = 30 }) => marginBottom}px;
  margin-left: ${({ marginLeft = 0 }) => marginLeft}px;
  text-align: ${({ textAlign = "center" }) => textAlign};
  width: ${({ width = "100%" }) => width};
  ${({ bolder }) =>
    bolder &&
    `text-shadow: 0 0 1px ${colors.KILLARNEY},
     0 0 1px ${colors.KILLARNEY},
      0 0 1px ${colors.KILLARNEY};`}

  color: ${colors.KILLARNEY};
  display: inline-block;
  font-style: normal;
  font-weight: bold;
  line-height: 59px;
`;
