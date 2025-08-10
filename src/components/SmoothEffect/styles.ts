import styled, { keyframes } from "styled-components";

const smooth = keyframes`
  0% {
    opacity: 0;
    /* transform: scale(0.8); */
  }
  100% {
    /* transform: scale(1); */
    opacity: 1;
  }
`;

export const Smooth = styled.div`
  width: 100%;
  animation: ${smooth} 1s ease-in forwards;
`;
