import styled from "styled-components";

import { colors } from "../../utils/colors";

interface ICuisineWrapperProps {
  checked: boolean;
  delay: boolean;
}

export const CuisineWrapper = styled.div<ICuisineWrapperProps>`
  transition: all 1s linear;

  ${({ delay, checked }) =>
    delay
      ? `opacity: 0;
        transform: scale(0.5);
      `
      : `
        background: ${checked ? colors.TUFT_BUSH : colors.WHITE};
        border: 1px solid ${colors.KILLARNEY}1A;
        border-radius: 15px;
        min-width: 140px;
        margin-right: 20px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        height: 80px;
        cursor: pointer;
        transform: scale(1);
  `}
`;

export const Cuisine = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 29px;
  color: ${colors.BLACK};
  margin-right: 20px;
`;

export const FoodImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 20px;
`;
