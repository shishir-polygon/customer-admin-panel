import styled from "styled-components";

import { colors } from "../../utils/colors";

export const About = styled.div`
  max-width: 290px;
  min-height: 575px;
  margin-right: 20px;
  margin-top: 37px;
  border-radius: 20px;
  background: ${colors.WHITE};
`;

export const AboutText = styled.span`
  display: block;
  max-width: 290px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.BLACK};
`;

export const EditAboutText = styled.textarea`
  border: none;
  resize: none;
  width: 100%;
  height: 220px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.MINE_SHAFT}B3;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background: transparent;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${colors.DOVE_GRAY}71;
    font-size: 17px;
  }

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

export const EditWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
