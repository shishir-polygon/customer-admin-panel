import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../../utils/colors";

export const NavbarWrapper = styled.div`
  position: fixed;
  left: 0;
  width: 210px;
  min-height: 100vh;
  background: ${colors.ALABASTER};
  box-shadow: 0px 4px 10px ${colors.BLACK}26;
`;

export const NavbarList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 62px;
  cursor: pointer;
  text-decoration: none;
  padding-left: 20px;
  color: ${colors.BOULDER};
  transition: all 0.2s linear;

  &.active {
    background: ${colors.KILLARNEY}1A;
    color: ${colors.KILLARNEY};
  }
`;

export const ItemName = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  transition: all 0.2s linear;
`;
