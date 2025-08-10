import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IEditMode {
  isEditMode?: boolean;
  isCheckMode?: boolean;
  isWhite?: boolean;
}

interface IInfoBlockProps {
  borderBottom?: boolean;
}

interface IInfoTitleProps {
  icon: string;
  color?: string;
  marginBottom?: number;
  marginTop?: number;
  iconWidth?: number;
  iconHeight?: number;
  fontWeight?: string;
  imgLeft?: number;
  bolder?: boolean;
  bolderLink?: boolean;
}

export const Info = styled.div<IEditMode>`
  background: ${({ isEditMode }) =>
    isEditMode ? colors.FOAM : `${colors.WHITE}CC`};
  padding: 30px 30px 10px;
  margin-top: 37px;
  width: 360px;
  min-height: 550px;
  backdrop-filter: blur(15px);
  border-radius: 20px;
  transition: all 0.3s ease-in;
`;

export const InfoBlock = styled.div<IInfoBlockProps>`
  padding-bottom: 20px;
  ${({ borderBottom = true }) =>
    borderBottom && `border-bottom: 1px solid ${colors.WILD_SAND}`};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.DOVE_GRAY};
`;

export const EditWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoTitle = styled.p<IInfoTitleProps>`
  margin-bottom: ${({ marginBottom = 16 }) => marginBottom}px;
  margin-top: ${({ marginTop = 16 }) => marginTop}px;
  font-weight: ${({ fontWeight = "bold" }) => fontWeight};
  color: ${({ color = colors.BLACK }) => color};
  ${({ bolder, bolderLink }) =>
    bolder &&
    `text-shadow: 0px 0px 1px ${bolderLink ? colors.MARINER : colors.BLACK};`}

  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;

  &:after {
    position: absolute;
    content: "";
    top: 1.5px;
    left: ${({ imgLeft = 0 }) => imgLeft}px;
    width: ${({ iconWidth = 20 }) => iconWidth}px;
    height: ${({ iconHeight = 20 }) => iconHeight}px;
    background: url(${({ icon }) => icon}) center no-repeat;
    border-radius: 4px;
  }
`;

export const CuisinesCheckList = styled.div`
  position: absolute;
  z-index: 2;
  top: 45px;
  left: -13px;
  width: 326px;
  min-height: 300px;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-radius: 20px;
  background: ${colors.WHITE};
`;

export const Hours = styled.span`
  height: 24px;
  display: flex;
  align-items: center;
`;

export const CuisinesList = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Cuisine = styled.span<IEditMode>`
  background: ${({ isEditMode, isWhite }) =>
    isEditMode || isWhite ? colors.WHITE : colors.TUFT_BUSH};
  ${({ isCheckMode }) =>
    isCheckMode && `border: 1px solid ${colors.VISTA_BLUE}4D;`}
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-right: 10px;
  margin-bottom: 7px;
  height: 26px;
  border-radius: 100px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: ${colors.BLACK};
  cursor: pointer;
`;

export const DeleteButton = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  margin-left: 10px;
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    top: 0;
    right: 3px;
    width: 1.5px;
    transform: rotate(45deg);
    height: 10px;
    background: ${colors.HEAVY_METAL};
  }

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 3px;
    width: 1.5px;
    transform: rotate(-45deg);
    height: 10px;
    background: ${colors.HEAVY_METAL};
  }
`;

export const AddButton = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    top: 0;
    right: 7px;
    width: 2px;
    height: 16px;
    background: ${colors.OXLEY};
  }

  &:before {
    position: absolute;
    content: "";
    top: 7px;
    right: 0;
    width: 16px;
    height: 2px;
    background: ${colors.OXLEY};
  }
`;

export const RatingBlock = styled.div`
  margin-top: 13px;
  display: flex;
`;

export const Rating = styled.span`
  margin-right: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: ${colors.BLACK};
`;

export const StarsWrapper = styled.div`
  margin-right: 15px;
  padding-top: 5px;
  display: flex;
  align-items: flex-start;
`;

export const CostWrapper = styled.div`
  margin-right: 28px;
`;

export const Cost = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: ${colors.EMERALD};
`;

export const ReviewsCount = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  color: ${colors.MARINER};
`;
