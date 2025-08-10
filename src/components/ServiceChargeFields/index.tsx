import { FC } from "react";
import { useFormik } from "formik";

import IServiceChargeFieldsProps from "./props";
import { ServiceCharge } from "./styles";
import { Button, Input, Text } from "..";
import { colors } from "../../utils/colors";

export const ServiceChargeFields: FC<IServiceChargeFieldsProps> = ({
  serviceCharge,
  onSave,
}) => {
  const {
    values: { price, percent },
    handleChange,
    handleBlur,
    setTouched,
    touched,
  } = useFormik({
    onSubmit: () => {},
    initialValues: {
      price: serviceCharge.isPercent ? "" : serviceCharge.charge,
      percent: serviceCharge.isPercent ? serviceCharge.charge : "",
    },
  });

  // TODO: correct disabled button
  // const disabledButton = serviceCharge.isPercent
  //   ? serviceCharge.charge === percent
  //   : serviceCharge.charge === price;

  const onSaveServiceCharge = () => {
    onSave({ isPercent: !!percent, charge: !!percent ? percent : price });
    setTouched({ percent: false, price: false });
  };

  return (
    <>
      <ServiceCharge>
        <Input
          name="price"
          value={price}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={!!percent}
          type="number"
          placeholder="£"
          placeholderOnCenter
          width="120px"
          marginLeft={20}
          marginBottom={0}
          marginRight={37}
          borderRadius={5}
          color={!touched.price ? colors.GOVERNOR_BAY : colors.DOVE_GRAY}
        />
        <Text color={colors.KILLARNEY} fontSize={16}>
          or
        </Text>
        <Input
          name="percent"
          value={percent}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={!!price}
          type="number"
          placeholder="%"
          placeholderOnCenter
          width="120px"
          marginLeft={37}
          marginBottom={0}
          borderRadius={5}
          color={!touched.percent ? colors.GOVERNOR_BAY : colors.DOVE_GRAY}
        />
      </ServiceCharge>
      <Button onClick={onSaveServiceCharge} text="Save" marginBottom={41} />
    </>
  );
};
