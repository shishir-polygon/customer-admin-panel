import styled from "styled-components";

import { IMAGES } from "../../assets";
import { colors } from "../../utils/colors";

interface IStaffBlock {
  withBorder?: boolean;
}

interface IStaffListProps {
  justifyContent?: string;
}

export const StaffWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0 40px 20px 20px;
  padding: 20px 15px 20px 30px;
  background: ${colors.WHITE};
  border: 1px solid ${colors.KILLARNEY}0D;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const StaffBlock = styled.div<IStaffBlock>`
  ${({ withBorder }) => withBorder && `border-top: 1px solid ${colors.SILVER};`}
  width: 100%;
  padding-bottom: 20px;
`;

export const StaffList = styled.div<IStaffListProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
`;

export const ListWrapper = styled.div`
  max-width: calc(100% - 110px);
  display: flex;
  flex-wrap: wrap;
`;

export const AddWorkerButton = styled.div`
  position: relative;
  width: 100px;
  height: 40px;
  border-radius: 100px;
  background: ${colors.WHITE};
  color: ${colors.KILLARNEY};
  border: 1px solid ${colors.KILLARNEY}80;
  cursor: pointer;

  &:before {
    position: absolute;
    content: "";
    top: 14px;
    left: 16px;
    width: 12px;
    height: 12px;
    background: url(${IMAGES.GREEN_PLUS}) center no-repeat;
  }

  &:after {
    position: absolute;
    content: "Add";
    top: 5px;
    right: 22px;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
  }
`;
