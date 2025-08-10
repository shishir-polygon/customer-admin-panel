import styled from "styled-components";

import { IMAGES } from "../../assets";
import { colors } from "../../utils/colors";

interface IAddPhotoBlock {
  width?: number;
  marginRight?: number;
  marginBottom?: number;
}

export const AddPhotoBlock = styled.div<IAddPhotoBlock>`
  width: ${({ width = 160 }) => width}px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;

  position: relative;
  height: 103px;
  background: ${colors.ALABASTER}CC;
  backdrop-filter: blur(15px);
  border-radius: 15px;
  cursor: pointer;
  padding-top: 58px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${colors.SILVER};
  text-align: center;

  &:after {
    position: absolute;
    content: "";
    top: 25px;
    left: calc(50% - 12px);
    width: 24px;
    height: 24px;
    background: url(${IMAGES.CAMERA_SMALL}) center no-repeat;
  }
`;
