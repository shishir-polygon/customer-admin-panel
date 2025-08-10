import styled from "styled-components";

import { colors } from "../../utils/colors";

export const Wrapper = styled.div`
  display: flex;
  margin: 15px 0 75px 20px;
`;

export const NumberField = styled.input`
  width: 28px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  border: 1px solid ${colors.GALLERY};
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 7.5px;
  font-family: "Helvetica Now Display";
  font-size: 17px;

  &:nth-child(4),
  :nth-child(8),
  :nth-child(12) {
    margin-right: 20px;
  }
`;
