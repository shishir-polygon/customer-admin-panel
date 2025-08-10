import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import IVerifyFieldsProps from "./props";
import { FieldWrapper } from "./styles";
import { Button, Input } from "..";
import { IVerifyNumberForm } from "../../utils/types";
import { verifyNumber } from "../../redux/auth/actions";
import { authSelector } from "../../redux/auth/selectors";

export const VerifyFields: FC<IVerifyFieldsProps> = ({ text }) => {
  const { authData } = useSelector(authSelector);
  const dispatch = useDispatch();

  const {
    values: { first, second, third, fourth },
    handleChange,
    handleSubmit,
  } = useFormik<IVerifyNumberForm>({
    onSubmit: onVerifyNumber,
    initialValues: {
      first: "0",
      second: "1",
      third: "1",
      fourth: "2",
    },
  });

  function onVerifyNumber({ first, second, third, fourth }: IVerifyNumberForm) {
    if (authData?.password && authData?.phoneNumber) {
      const data = {
        phoneNumber: authData.phoneNumber,
        password: authData.password,
        verificationCode: `${first}${second}${third}${fourth}`,
      };
      dispatch(verifyNumber(data));
    }
  }

  return (
    <>
      <FieldWrapper>
        <Input
          placeholderOnCenter
          name="first"
          type="number"
          value={first}
          onChange={handleChange}
          width="32px"
          borderRadius={10}
          marginRight={15}
        />
        <Input
          placeholderOnCenter
          name="second"
          type="number"
          value={second}
          onChange={handleChange}
          width="32px"
          borderRadius={10}
          marginRight={15}
        />
        <Input
          placeholderOnCenter
          name="third"
          type="number"
          value={third}
          onChange={handleChange}
          width="32px"
          borderRadius={10}
          marginRight={15}
        />
        <Input
          placeholderOnCenter
          name="fourth"
          type="number"
          value={fourth}
          onChange={handleChange}
          width="32px"
          borderRadius={10}
        />
      </FieldWrapper>
      <Button text={text} onClick={handleSubmit} />
    </>
  );
};
