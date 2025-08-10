import { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import IDeliverectSettingProps from "./props";
import { Title, Text, Input, Button } from "..";
import { colors } from "../../utils/colors";
import { settingsSelector } from "../../redux/settings/selectors";

export const DeliverectSetting: FC<IDeliverectSettingProps> = () => {
  const { deliverect } = useSelector(settingsSelector);
  const dispatch = useDispatch();

  const [deliverectId, setDeliverectId] = useState(deliverect.deliverectId);

  const onChangeDeliverectId = (e: ChangeEvent<HTMLInputElement>) =>
    setDeliverectId(e.currentTarget.value);

  const changeDeliverectHandle = () => dispatch(setDeliverectId(deliverectId));

  return (
    <>
      <Title
        fontSize={24}
        lineHeight={35}
        marginTop={0}
        marginBottom={10}
        text="Deliverect ID"
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

      <Title
        fontSize={18}
        lineHeight={26}
        marginTop={0}
        marginBottom={6}
        text="Deliverect ID"
      />
      <Input
        value={deliverectId}
        onChange={onChangeDeliverectId}
        marginLeft={20}
        marginBottom={24}
        borderRadius={5}
        color={
          deliverect.deliverectId === deliverectId
            ? colors.GOVERNOR_BAY
            : colors.DOVE_GRAY
        }
      />

      <Button
        disabled={deliverect.deliverectId === deliverectId}
        onClick={changeDeliverectHandle}
        text="Save"
      />
    </>
  );
};
