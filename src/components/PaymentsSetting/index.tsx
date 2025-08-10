import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import IPaymentsSettingProps from "./props";
import { StripeLink, WarningWrapper } from "./styles";
import { Title, Text, Input, Button, Img, Warning } from "..";
import { IMAGES } from "../../assets";
import { colors } from "../../utils/colors";
import { LocalStorage } from "../../utils/constants";
import { settingsSelector } from "../../redux/settings/selectors";
import {
  connectedStripe,
  setPaymentsSettings,
  setStripeStatus,
} from "../../redux/settings/actions";
import { ButtonStylePreset } from "../../utils/types";

export const PaymentsSetting: FC<IPaymentsSettingProps> = () => {
  const [stripeLink, setStripeLink] = useState("");
  const [changeCart, setChangeCart] = useState(false);

  const { payments } = useSelector(settingsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = localStorage.getItem(LocalStorage.RestaurantID);
    changeCart && id && dispatch(connectedStripe(id, setStripeLink));

    return () => {
      changeCart && dispatch(setStripeStatus(false));
    };
  }, [dispatch, changeCart]);

  const {
    values: { tipsPayPall, payPall },
    handleChange,
  } = useFormik({
    onSubmit: () => {},
    initialValues: {
      payPall: payments.payPall,
      tipsPayPall: payments.tipsPayPall,
    },
  });

  const onChangeCreditCard = () => setChangeCart(true);

  const changePaymentsHandler = () =>
    dispatch(
      setPaymentsSettings({
        payPall,
        tipsPayPall,
        withStripe: payments.withStripe,
      })
    );

  return (
    <>
      {!payments.withStripe && (
        <WarningWrapper>
          <Warning
            maxWidth={417}
            text="Please pay attention! You will not appear in search results until you specify at least one payment method"
          />
        </WarningWrapper>
      )}

      <Title
        fontSize={24}
        lineHeight={35}
        marginTop={0}
        marginBottom={10}
        text="Payments"
      />
      <Text
        color={colors.NOBEL}
        fontSize={12}
        fontWeight="500"
        maxWidth="425px"
        marginBottom={40}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      {/* PayPall block */}
      <Title
        fontSize={18}
        lineHeight={26}
        marginTop={0}
        marginBottom={6}
        text="PayPall"
      />
      <Img
        src={IMAGES.PAY_PALL}
        style={{ position: "absolute", top: "167px", left: "109px" }}
      />
      <Input
        name="payPall"
        value={payPall}
        onChange={handleChange}
        placeholder="https://www.paypal.com/ru/home"
        marginLeft={20}
        marginBottom={44}
        borderRadius={5}
        color={
          payments.payPall === payPall ? colors.GOVERNOR_BAY : colors.DOVE_GRAY
        }
      />

      {/* PayPall for tips block */}
      <Title
        fontSize={18}
        lineHeight={26}
        marginTop={0}
        marginBottom={6}
        text="PayPall for tips"
      />
      <Img
        src={IMAGES.PAY_PALL}
        style={{ position: "absolute", top: "287px", left: "170px" }}
      />
      <Input
        name="tipsPayPall"
        value={tipsPayPall}
        onChange={handleChange}
        placeholder="https://www.paypal.com/ru/home"
        marginLeft={20}
        marginBottom={24}
        borderRadius={5}
        color={
          payments.tipsPayPall === tipsPayPall
            ? colors.GOVERNOR_BAY
            : colors.DOVE_GRAY
        }
      />

      {stripeLink && (
        <>
          <Title
            fontSize={18}
            lineHeight={26}
            marginTop={0}
            marginBottom={6}
            text="Credit card link"
          />
          <StripeLink href={stripeLink} target="_blank">
            {stripeLink}
          </StripeLink>
        </>
      )}

      <Button
        center
        onClick={onChangeCreditCard}
        preset={ButtonStylePreset.AnimationButton}
        text="Change credit card"
      />
      <Button
        onClick={changePaymentsHandler}
        marginTop={40}
        text="Save"
        disabled={
          payments.tipsPayPall === tipsPayPall && payments.payPall === payPall
        }
      />
    </>
  );
};
