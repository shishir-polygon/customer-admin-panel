import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IFilterListProps {
  isActive: boolean;
}

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 58px 0 88px;
`;

export const FilterName = styled.span`
  position: relative;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: ${colors.BLACK};
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    right: -15px;
    bottom: 0;
    border: 6px solid transparent;
    border-top: 4px solid ${colors.BLACK};
  }
`;

export const Filter = styled.div`
  position: relative;
  padding-bottom: 15px;
`;

export const FilterList = styled.div<IFilterListProps>`
  position: absolute;
  top: 28px;
  left: -25px;
  background: ${colors.WHITE};
  width: 118px;
  display: flex;
  flex-direction: column;
  padding: 8px 14px;
  box-shadow: 0px 4px 10px ${colors.DUSTY_GRAY}40;
  border-radius: 8px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s linear;

  ${({ isActive }) => {
    if (isActive) {
      return `
      visibility: visible;
      transition: all .3s linear;
      opacity: 1;
      `;
    }
  }}
`;

export const FilterItem = styled.span`
  font-size: 14px;
  font-weight: normal;
  line-height: 21px;
  border-bottom: 1px solid ${colors.SILVER};
  padding-bottom: 9px;
  margin-bottom: 9px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    text-shadow: 0px 0px ${colors.BLACK};
    transition: all 0.3s ease-in;
  }

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
