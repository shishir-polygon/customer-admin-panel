import { FC } from "react";
import { useDispatch } from "react-redux";

import ILoginScreenProps from "./props";
import { LoginWrapper } from "./styles";
import { SignInAnddUp } from "../../components";
import { ISignUpAndSingInForm } from "../../utils/types";
import { login } from "../../redux/auth/actions";

export const LoginScreen: FC<ILoginScreenProps> = () => {
  const dispatch = useDispatch();

  const onLogin = ({ phoneNumber, password }: ISignUpAndSingInForm) =>
    dispatch(login({ phoneNumber, password }));

  return (
    <LoginWrapper>
      <SignInAnddUp isLogin onSubmit={onLogin} />
    </LoginWrapper>
  );
};
