import styled from "styled-components";

import { IMAGES } from "../../assets";
import { colors } from "../../utils/colors";

interface IDropDownProps {
  width?: string;
  height?: number;
  margin?: string;
}

export const DropDownWrapper = styled.div<IDropDownProps>`
  width: ${({ width = "100%" }) => width};
  height: ${({ height = 42 }) => height}px;
  margin: ${({ margin = "0" }) => margin};

  position: relative;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background: ${colors.WHITE};
  border: 1px solid ${colors.GALLERY};
  border-radius: 5px;
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    top: 15px;
    right: 15px;
    width: 12px;
    height: 12px;
    background: url(${IMAGES.MARK}) center no-repeat;
  }
`;

export const CheckedItem = styled.span`
  color: ${colors.SILVER_CHALICE};
  font-size: 15px;
  line-height: 22px;
`;

export const List = styled.div`
  width: 100%;
  position: absolute;
  z-index: 3;
  top: 40px;
  left: 0;
  display: flex;
  flex-direction: column;
  background: ${colors.WHITE};
`;

export const Item = styled.span`
  width: 100%;
  height: 42px;
  border: 1px solid ${colors.GALLERY};
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 15px;
  line-height: 22px;
`;
