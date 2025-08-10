import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import IServiceChargeSettingProps from "./props";
import { Title, Text, ServiceChargeFields } from "..";
import { colors } from "../../utils/colors";
import { IServiceCharge } from "../../utils/types";
import { serviceChargeSelector } from "../../redux/settings/selectors";
import {
  setMainServiceCharge,
  setPickUpServiceCharge,
} from "../../redux/settings/actions";

export const ServiceChargeSetting: FC<IServiceChargeSettingProps> = () => {
  const { mainServiceCharge, pickupServiceCharge } = useSelector(
    serviceChargeSelector
  );
  const dispatch = useDispatch();

  const changeMainServiceCharge = (payload: IServiceCharge) => {
    dispatch(setMainServiceCharge(payload));
  };

  const changePickUpServiceCharge = (payload: IServiceCharge) => {
    dispatch(setPickUpServiceCharge(payload));
  };

  return (
    <>
      <Title
        fontSize={24}
        lineHeight={35}
        marginTop={0}
        marginBottom={40}
        text="Service Charge"
      />

      <Title
        fontSize={18}
        lineHeight={26}
        marginTop={0}
        marginBottom={10}
        text="Main service charge"
      />
      <Text
        color={colors.NOBEL}
        fontSize={12}
        fontWeight="500"
        maxWidth="425px"
        marginBottom={21}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <ServiceChargeFields
        onSave={changeMainServiceCharge}
        serviceCharge={mainServiceCharge}
      />

      <Title
        fontSize={18}
        lineHeight={26}
        marginTop={0}
        marginBottom={10}
        text="Pick up service charge"
      />
      <Text
        color={colors.NOBEL}
        fontSize={12}
        fontWeight="500"
        maxWidth="425px"
        marginBottom={21}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <ServiceChargeFields
        onSave={changePickUpServiceCharge}
        serviceCharge={pickupServiceCharge}
      />
    </>
  );
};
