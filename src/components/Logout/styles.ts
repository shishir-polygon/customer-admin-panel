import styled from "styled-components";

import { colors } from "../../utils/colors";

export const LogoutButton = styled.div`
  position: fixed;
  z-index: 999;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${colors.GALLERY};
  cursor: pointer;
  transition: all 0.5s ease-in;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 1px 2px ${colors.DUSTY_GRAY}40;
  }
`;
