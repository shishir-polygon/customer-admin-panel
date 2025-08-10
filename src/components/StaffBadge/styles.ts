import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IBadgeProps {
  isGeneralManager?: boolean;
}

const Base = `
  position: absolute;
  content: "";
  top: 0;
  right: 7px;
  width: 1.3px;
  height: 15px;
  background: ${colors.BLACK};`;

export const Badge = styled.div<IBadgeProps>`
  width: 300px;
  height: 53px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 6px 0;
  margin-right: 15px;
  margin-bottom: 15px;
  background: ${({ isGeneralManager }) =>
    isGeneralManager ? colors.HINT_OF_GREEN : colors.ALABASTER};
`;

export const BadgeText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RemoveWorker = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  margin-bottom: 15px;
  margin-left: 25%;
  cursor: pointer;

  &:before {
    ${Base};
    transform: rotate(45deg);
  }

  &:after {
    ${Base};
    transform: rotate(-45deg);
  }
`;
