import { FC } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";

import ISignInAndUpProps from "./props";
import { FieldWrapper, Form } from "./styles";
import { Button, Heading, Input, Title, VerifyFields } from "..";
import { colors } from "../../utils/colors";
import { ISignUpAndSingInForm } from "../../utils/types";
import { authSelector } from "../../redux/auth/selectors";

export const SignInAnddUp: FC<ISignInAndUpProps> = ({ isLogin, onSubmit }) => {
  const { isVerifyStep } = useSelector(authSelector);

  const {
    values: { email, password, phoneNumber },
    handleChange,
    handleSubmit,
  } = useFormik<ISignUpAndSingInForm>({
    onSubmit: onSubmit,
    initialValues: {
      email: "01010101@panda.com",
      password: "",
      // phoneNumber: "011288005553535",

      // my account
      // phoneNumber: "01120101010",
      // super admin
      // phoneNumber: "2147483643",
      //
      phoneNumber: "+380995202588",
      // phoneNumber: "",
    },
  });

  const text = isLogin ? "Log in" : "Sign up";

  return (
    <FieldWrapper>
      <Heading bolder marginTop={100} marginBottom={60} text={text} />
      {isVerifyStep ? (
        <>
          <Title
            text="Check your messages"
            fontSize={24}
            fontWeight="bold"
            lineHeight={35}
            marginBottom={24}
          />
          <Title
            text="We sent you a code"
            color={colors.SILVER_CHALICE}
            fontSize={15}
            fontWeight="normal"
            marginBottom={10}
          />
          <VerifyFields text={text} />
        </>
      ) : (
        <>
          <Form onSubmit={handleSubmit}>
            <Input
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              title={`${isLogin ? "Y" : "Add y"}our email`}
            />
            <Input
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              type="tel"
              placeholder="Number"
              title={`${isLogin ? "Y" : "Add y"}our phone`}
            />
            <Input
              name="password"
              value={password}
              type="password"
              onChange={handleChange}
              placeholder="Password"
              marginBottom={80}
              title={`${isLogin ? "Y" : "Create y"}our password`}
            />
            <Button text={text} type="submit" />
          </Form>
        </>
      )}
    </FieldWrapper>
  );
};
