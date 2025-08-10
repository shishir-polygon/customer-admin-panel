import styled from "styled-components";

import { IMAGES } from "../../assets";
import { colors } from "../../utils/colors";

interface IOrderStatusProps {
  backgroundColor?: string;
  color?: string;
}

export const OrderWrapper = styled.div`
  width: 476px;
  height: 720px;
  display: flex;
  flex-direction: column;
  padding: 40px 30px 30px;
  margin: 33px 30px;
  background: url(${IMAGES.LIST}) center no-repeat;
`;

interface IInfoBlockProps {
  withBorder?: boolean;
  marginTop?: number;
  marginBottom?: number;
}

export const InfoBlock = styled.div<IInfoBlockProps>`
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  ${({ withBorder }) =>
    withBorder &&
    `
  border-bottom: 1px solid ${colors.EBB};
  padding-bottom: 9px;
  margin-bottom: 9px;`};

  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const OrderHeading = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 59px;
  margin: 0;
  color: ${colors.BLACK};
  text-shadow: 0px 0px 1px ${colors.BLACK}, 0px 0px 1px ${colors.BLACK};
`;

export const OrderStatus = styled.div<IOrderStatusProps>`
  background: ${({ backgroundColor = colors.BROOM }) => backgroundColor};
  color: ${({ color = colors.WHITE }) => color};
  width: 120px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  border-radius: 8px;
`;

export const OrderInfoBlock = styled.div`
  border-top: 1px solid ${colors.GALLERY};
  margin-top: 20px;
`;

export const DownloadBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
`;

export const OrderDate = styled.span`
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: ${colors.NOBEL};
`;

export const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
