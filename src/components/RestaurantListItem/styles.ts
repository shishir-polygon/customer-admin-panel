import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IRestaurantItemProps {
  delay: boolean;
  animationState?: string;
}

export const RestaurantItem = styled.div<IRestaurantItemProps>`
  transition: all 1s linear;
  ${({ delay }) =>
    delay
      ? `opacity: 0;
        `
      : `opacity:1;
        position: relative;
        max-width: 45%;
        width: 505px;
        border-radius: 20px;
        overflow: hidden;
        margin: 0 20px 20px 0;
        cursor: pointer;`}
`;

export const RestaurantImg = styled.img`
  width: 505px;
  height: 254px;
  object-fit: cover;
`;

export const RestaurantName = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: ${colors.WHITE}CC;
  backdrop-filter: blur(15px);
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 44px;
  color: ${colors.KILLARNEY};
  padding-left: 30px;
  padding-top: 8px;
`;
