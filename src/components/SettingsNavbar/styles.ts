import styled from "styled-components";

import { colors } from "../../utils/colors";

interface INavbarItemProps {
  checked: boolean;
}

export const NavbarWrapper = styled.div`
  width: 205px;
  padding-right: 20px;
  cursor: pointer;
`;

export const NavItem = styled.div<INavbarItemProps>`
  position: relative;
  width: 184px;
  height: 46px;
  display: flex;
  align-items: center;
  padding-left: 36px;
  border-radius: 5px;
  transition: all 0.25s ease-in-out;

  ${({ checked }) =>
    checked
      ? ` background: ${colors.KILLARNEY}66;
          text-shadow: 0 0 1px ${colors.KILLARNEY}, 0 0 1px ${colors.KILLARNEY}, 0 0 1px ${colors.KILLARNEY};
          color: ${colors.KILLARNEY};`
      : `background: transparent;
        color: ${colors.BOULDER};`}
`;
