import { FC, ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import IProfileSettingProps from "./props";
import { Title, Text, Button, Input } from "..";
import { colors } from "../../utils/colors";
import { authSelector } from "../../redux/auth/selectors";
import { setManagerSettings } from "../../redux/settings/actions";

export const ProfileSetting: FC<IProfileSettingProps> = () => {
  const { userData } = useSelector(authSelector);
  const dispatch = useDispatch();

  const [email, setEmail] = useState(userData?.email);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);

  const changeEmailHandler = () => {
    userData && email && dispatch(setManagerSettings(email, userData?._id));
  };

  return (
    <>
      <Title
        fontSize={24}
        lineHeight={35}
        marginTop={0}
        marginBottom={10}
        text="Profile"
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
        text="Email"
      />
      <Input
        value={email}
        onChange={onChangeEmail}
        marginLeft={20}
        marginBottom={24}
        borderRadius={5}
        color={
          userData?.email === email ? colors.GOVERNOR_BAY : colors.DOVE_GRAY
        }
      />

      <Button
        disabled={userData?.email === email}
        onClick={changeEmailHandler}
        text="Save"
      />
    </>
  );
};
