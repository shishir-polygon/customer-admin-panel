import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IDetailProps {
  color?: string;
  img: string;
}

export const Detail = styled.div<IDetailProps>`
  background: ${({ color = `${colors.VISTA_BLUE}66` }) => color};
  position: relative;
  height: 68px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px 10px 10px 52px;
  cursor: default;

  &:before {
    position: absolute;
    content: "";
    width: 1px;
    height: 48px;
    background: ${colors.KILLARNEY}80;
    top: 10px;
    left: 42px;
  }

  &:after {
    position: absolute;
    content: "";
    top: 24px;
    left: 12px;
    width: 20px;
    height: 20px;
    background: url(${({ img }) => img}) center no-repeat;
  }

  &:first-of-type {
    background: ${colors.ALABASTER};
  }
`;

export const ImgWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${colors.ALTO};
  margin-top: 17px;
  cursor: pointer;
`;
