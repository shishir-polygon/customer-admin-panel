import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import IWelcomeScreenProps from "./props";
import { SignUpWrapper, WelcomeText, Wrapper } from "./styles";
import { SignInAnddUp } from "../../components";
import { ISignUpAndSingInForm } from "../../utils/types";
import { signUp } from "../../redux/auth/actions";

export const SignUpScreen: FC<IWelcomeScreenProps> = () => {
  const [showWelcomeText, setWelcomeText] = useState(true);

  const dispatch = useDispatch();

  // For greeting text
  useEffect(() => {
    const timeout = setTimeout(() => setWelcomeText(false), 2000);

    return () => clearTimeout(timeout);
  }, []);

  const onNextStep = (values: ISignUpAndSingInForm) => {
    dispatch(
      signUp({
        ...values,
        role: "admin",
        restaurantId: null,
      })
    );
  };

  return (
    <Wrapper>
      {showWelcomeText ? (
        <WelcomeText>Welcome to Panda!</WelcomeText>
      ) : (
        <SignUpWrapper>
          <SignInAnddUp onSubmit={onNextStep} />
        </SignUpWrapper>
      )}
    </Wrapper>
  );
};
