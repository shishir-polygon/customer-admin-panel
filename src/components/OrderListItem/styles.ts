import styled from "styled-components";

import { colors } from "../../utils/colors";

interface ITextProps {
  fontSize?: number;
  fontWeight?: string;
  marginRight?: number;
  withDot?: boolean;
}

interface IOrderProps {
  isChecked: boolean;
}

export const Order = styled.div<IOrderProps>`
  width: 100%;
  height: 70px;
  background: ${colors.WHITE};
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 15px;
  box-shadow: 1px 2px 8px ${colors.GRAY}1A;
  cursor: pointer;
  transition: all 0.5s linear;

  ${({ isChecked }) =>
    isChecked && `box-shadow: 0px 4px 10px ${colors.DUSTY_GRAY}40;`};
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const OrderInfoBlock = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;

export const OrderText = styled.span<ITextProps>`
  font-size: ${({ fontSize = 18 }) => fontSize};
  font-weight: ${({ fontWeight = "bold" }) => fontWeight};
  margin-left: ${({ withDot }) => (withDot ? 10 : 0)}px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
  color: ${colors.BLACK};
  line-height: 26px;

  ${({ withDot }) =>
    withDot &&
    `
    position: relative;

    &:before {
      position: absolute;
      content: "";
      width: 5px;
      height: 5px;
      background: ${colors.BRIGHT_SUN};
      border-radius: 50%;
      left: -10px;
      top: 10px;
    }
  `}
`;
