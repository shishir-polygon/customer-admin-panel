import styled, { keyframes } from "styled-components";

import { colors } from "../../utils/colors";

const smooth = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SignUpWrapper = styled.div`
  width: 100%;
  max-width: 470px;
  height: 100vh;
`;

export const WelcomeText = styled.h2`
  animation: ${smooth} 1s ease-in forwards;
  margin: 0;
  padding-top: calc(50vh - 40px);
  color: ${colors.KILLARNEY};
  font-size: 80px;
  font-style: normal;
  font-weight: 900;
  line-height: 118px;
  opacity: 0;
`;

export const Step = styled.div`
  max-width: 470px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
