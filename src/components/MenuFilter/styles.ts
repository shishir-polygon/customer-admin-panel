import styled from "styled-components";

import { colors } from "../../utils/colors";

interface ICategoryNameProps {
  isActive: boolean;
}

interface IItemProps {
  padding?: number;
}

export const Filter = styled.div`
  padding-top: 69px;
  width: 95px;
  height: 540px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: 10px;

  &::-webkit-scrollbar {
    margin-right: 5px;
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: ${colors.ALABASTER};
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.KILLARNEY};
    border-radius: 10px;
  }
`;

export const Item = styled.div<IItemProps>`
  cursor: pointer;
  margin-bottom: 100px;

  padding: ${({ padding: marginBottom = 100 }) => marginBottom}px 0;
`;

export const CategoryName = styled.span<ICategoryNameProps>`
  color: ${({ isActive }) => (isActive ? colors.KILLARNEY : colors.BLACK)};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  font-size: ${({ isActive }) => (isActive ? 24 : 20)}px;

  white-space: nowrap;
  line-height: 29px;
  transition: all 0.2s ease-in;
  display: block;

  transform-origin: top left;
  transform: rotate(-90deg) translate(-100%);
  white-space: nowrap;
  text-align: right;
`;
