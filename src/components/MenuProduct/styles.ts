import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IMenuItemProps {
  presence: boolean;
  delay: boolean;
}

interface IItemInfoBlockProps {
  marginBottom?: number;
}

const BasePrice = `
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.BROOM};
  font-size: 15px;
  line-height: 22px;
  width: 48px;
`;

export const MenuItem = styled.div<IMenuItemProps>`
  ${({ presence, delay }) =>
    delay
      ? `opacity: 0;`
      : `
      background: ${!presence ? `${colors.WILD_SAND}99` : `${colors.WHITE}99`};
      opacity: ${!presence ? 0.65 : 1};
      width: 400px;
      height: 100px;
      backdrop-filter: blur(15px);
      border-radius: 8px;
      margin-bottom: 10px;
      padding: 0px 0 10px 20px;
      cursor: pointer;

      &:nth-child(2n + 1) {
        margin-right: 20px;
      }

      &:hover {
        transition: all 0.5s ease-out;
        box-shadow: 0px 4px 10px ${colors.DUSTY_GRAY}40;
      }
  `}

  transition: all 0.5s ease-in;
`;

export const SaleWrapper = styled.div`
  display: flex;
  height: 32px;
`;

export const OldPrice = styled.div`
  ${BasePrice};
  position: relative;
  border-bottom-left-radius: 8px;
  font-style: italic;
  font-weight: normal;
  text-decoration-line: line-through;

  &:after {
    position: absolute;
    content: "";
    top: 5px;
    right: 0;
    width: 1px;
    height: 22px;
    background: ${colors.BLACK};
  }
`;

export const SalePrice = styled.div`
  ${BasePrice};
  border-top-right-radius: 8px;
  font-weight: bold;
`;

export const ItemInfoBlock = styled.div<IItemInfoBlockProps>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
`;
