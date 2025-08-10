import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IWrapper {
  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
  marginBottom?: number;
  maxWidth?: number;
}

export const Wrapper = styled.div<IWrapper>`
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}px`};
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}px`};
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px`};
  max-width: ${({ maxWidth = 267 }) => maxWidth}px;

  display: flex;
  align-items: center;
  min-height: 72px;
  padding: 15px;
  border-radius: 10px;
  background: ${colors.MONA_LISA};
`;

export const WarningText = styled.p`
  font-family: "Helvetica Now Display";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: ${colors.WHITE};
  margin: 0;
`;
