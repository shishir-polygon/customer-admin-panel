import styled from "styled-components";

import { colors } from "../../utils/colors";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.VISTA_BLUE};
`;

export const LoadingBlock = styled.div`
  position: relative;
  padding-left: 93px;
`;

export const Border = styled.div`
  width: 100%;
  height: 2px;
  background: black;
  position: absolute;
  top: 15px;
  left: 0;
`;
