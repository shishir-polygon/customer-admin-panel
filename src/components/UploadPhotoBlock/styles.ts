import styled from "styled-components";

import { IMAGES } from "../../assets";
import { colors } from "../../utils/colors";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 290px;
  height: 330px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
`;

export const PhotoBlock = styled.div`
  position: relative;
  cursor: pointer;
  border: 1px solid ${colors.VISTA_BLUE}4D;
  background: ${colors.WHITE};
  box-sizing: border-box;
  height: 190px;
  border-radius: 15px;

  &:after {
    position: absolute;
    content: "";
    top: 53px;
    right: calc(50% - 20px);
    width: 40px;
    height: 35px;
    background: url(${IMAGES.CAMERA}) center no-repeat;
  }

  &:before {
    position: absolute;
    content: "Add main photo";
    top: 111px;
    right: calc(50% - 77px);
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
    color: ${colors.SILVER};
  }
`;

export const UploadPhoto = styled.input`
  cursor: pointer;
  position: absolute;
  top: 26px;
  left: 0;
  width: 100%;
  height: 190px;
  opacity: 0;
`;

export const RestaurantPhoto = styled.img`
  height: 190px;
  box-sizing: border-box;
  border-radius: 15px;
`;
