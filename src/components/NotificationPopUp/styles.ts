import styled from "styled-components";

import { colors } from "../../utils/colors";
import { NotificationPopUpType } from "../../utils/types";

interface INotificationProps {
  show?: boolean;
  type?: NotificationPopUpType;
}

export const Notification = styled.div<INotificationProps>`
  position: fixed;
  z-index: 997;
  top: ${({ show }) => (!show ? "-180px" : "80px")};
  min-width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  background: ${({ type = "error" }) =>
    type === "error" ? colors.MONA_LISA : colors.KILLARNEY}C7;
  border: 1px solid ${colors.KILLARNEY}1A;
  color: ${colors.WHITE};
  font-family: "Helvetica Now Display";
  font-size: 16px;
  line-height: 21px;
  transition: all 1s ease-in;
`;

export const CloseNotification = styled.div`
  cursor: pointer;

  &:before {
    position: absolute;
    content: "";
    top: -10px;
    right: -5%;
    transform: rotate(45deg);
    width: 2px;
    height: 15px;
    background: ${colors.KILLARNEY};
  }

  &:after {
    position: absolute;
    content: "";
    top: -10px;
    right: -5%;
    transform: rotate(-45deg);
    width: 2px;
    height: 15px;
    background: ${colors.KILLARNEY};
  }
`;
