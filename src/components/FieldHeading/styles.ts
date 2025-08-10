import styled from "styled-components";

import { IMAGES } from "../../assets";
import { colors } from "../../utils/colors";

interface IHeadingTextProps {
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}

export const HeadingText = styled.span<IHeadingTextProps>`
  margin-bottom: ${({ marginBottom = 10 }) => marginBottom}px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
  margin-left: ${({ marginLeft = 0 }) => marginLeft}px;
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: ${colors.KILLARNEY};

  &:after {
    position: absolute;
    content: "";
    top: 4px;
    left: -26px;
    width: 16px;
    height: 13.6px;
    background: url(${IMAGES.PANDA}) center no-repeat;
  }
`;
