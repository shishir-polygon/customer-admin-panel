import styled from "styled-components";
import Loader from "react-loader-spinner";

import { colors } from "../../utils/colors";

interface IWrapperProps {
  mini?: boolean;
}

export const LoaderWrapper = styled.div<IWrapperProps>`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.MINE_SHAFT}CC;
  backdrop-filter: blur(4px);

  ${({ mini }) => {
    if (mini) {
      return `
      position: absolute;
      padding-top: 100px;
      width: 100%;
      height: 100%;
      background: transparent;
      align-items: flex-start;
      `;
    }
  }}
`;

export const Spinner = styled(Loader)``;
