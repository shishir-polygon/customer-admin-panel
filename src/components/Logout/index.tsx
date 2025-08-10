import { FC } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import ILogoutProps from "./props";
import { LogoutButton } from "./styles";
import { Img } from "..";
import { IMAGES } from "../../assets";
import { Routes } from "../../utils/constants";
import { clearAxiosConfig } from "../../utils/api";
import { logout } from "../../redux/auth/actions";

export const Logout: FC<ILogoutProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    clearAxiosConfig();
    dispatch(logout());
    history.push(Routes.Login);
  };

  return (
    <LogoutButton onClick={logoutHandler}>
      <Img src={IMAGES.LOGOUT} width={20} cursor="pointer" />
    </LogoutButton>
  );
};
