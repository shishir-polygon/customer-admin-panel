import styled, { keyframes } from "styled-components";

import { colors } from "../../utils/colors";

interface IPeriodProps {
  active: boolean;
}

interface IDayProps extends IPeriodProps {}

export const ListWrapper = styled.div`
  position: relative;
`;

export const PeriodsFilter = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 57px;
  margin-bottom: 45px;
`;

export const Period = styled.span<IPeriodProps>`
  background: ${({ active }) => (active ? colors.KILLARNEY : colors.WHITE)};
  color: ${({ active }) => (active ? colors.WHITE : `${colors.KILLARNEY}4D`)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 30px;
  margin-right: 15px;
  border: 1px solid ${colors.KILLARNEY}4D;
  border-radius: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const AdditionalFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  margin-right: 18px;
`;

const smooth = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

export const Day = styled.span<IDayProps>`
  ${({ active }) =>
    active &&
    `
    position: relative;
    padding-left: 10px;
    transition: all 0.3s ease-in;
    
    &:before {
      position: absolute;
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${colors.KILLARNEY};
      top: 10px;
      left: 0;
    }`};

  animation: ${smooth} 0.3s linear forwards;
  white-space: nowrap;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  color: ${({ active }) => (active ? colors.KILLARNEY : colors.BLACK)};
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-style: normal;

  font-size: 18px;
  line-height: 26px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const List = styled.div`
  display: flex;
`;

export const OrderList = styled.div`
  width: 410px;
  height: 500px;
  overflow-y: auto;
  padding-right: 20px;
  padding-left: 7px;

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
