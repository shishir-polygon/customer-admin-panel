import styled from "styled-components";

import { colors } from "../../utils/colors";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 125px;
`;

export const RestaurantsList = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
`;

export const AddRestaurant = styled.div`
  position: relative;
  max-width: 45%;
  width: 505px;
  height: 254px;
  background: ${colors.WHITE};
  border-radius: 20px;
  border: 1px solid ${colors.KILLARNEY}26;
  margin: 0 20px 20px 0;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 1px 2px ${colors.DUSTY_GRAY}40;
  }

  &:before {
    position: absolute;
    content: "";
    top: 40px;
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${colors.KILLARNEY}33;
  }

  &:after {
    position: absolute;
    content: "+";
    top: 39px;
    height: 100px;
    width: 100%;
    text-align: center;
    color: ${colors.KILLARNEY};
    font-size: 80px;
    font-weight: 300;
  }
`;

export const Title = styled.span`
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 44px;
  color: ${colors.KILLARNEY}80;
`;
