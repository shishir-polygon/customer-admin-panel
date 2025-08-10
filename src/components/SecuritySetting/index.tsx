import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ISecuritySettingProps from "./props";
import { ButtonWrapper } from "./styles";
import {
  Title,
  Text,
  SettingPasswordField,
  Button,
  Modal,
  NotificationPopUp,
} from "..";
import { colors } from "../../utils/colors";
import { ButtonStylePreset } from "../../utils/types";
import { authSelector } from "../../redux/auth/selectors";
import { changePassword } from "../../redux/settings/actions";

export const SecuritySetting: FC<ISecuritySettingProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [successNotification, setSuccessNotification] = useState<string | null>(
    null
  );

  const { userData } = useSelector(authSelector);
  const dispatch = useDispatch();

  const onResetPass = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);
  const onSuccessChangePassHandler = () =>
    setSuccessNotification("Password changed successfully");
  const changePassHandler = () => {
    userData?._id &&
      dispatch(
        changePassword(
          userData?._id,
          { oldPassword, password },
          onSuccessChangePassHandler
        )
      );
    onCloseModal();
  };

  return (
    <>
      <Modal showModal={showModal} onCloseModal={onCloseModal}>
        <Title text="Reset password" marginBottom={20} />
        <Text marginBottom={40}>Send you a new password by email?</Text>
        <ButtonWrapper>
          <Button text="No" width="160px" onClick={onCloseModal} />
          <Button text="yes" width="160px" onClick={changePassHandler} />
        </ButtonWrapper>
      </Modal>

      <NotificationPopUp
        closeSuccessPopUp={setSuccessNotification}
        type="success"
        error={successNotification}
      />

      <Title
        fontSize={24}
        lineHeight={35}
        marginTop={0}
        marginBottom={40}
        text="Security"
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

      <SettingPasswordField
        value={oldPassword}
        setValue={setOldPassword}
        title="Old password"
      />
      <SettingPasswordField
        value={password}
        setValue={setPassword}
        title="New password"
      />
      <SettingPasswordField
        value={confirmPass}
        setValue={setConfirmPass}
        title="Confirm New password"
      />

      <Button
        disabled={password !== confirmPass || !password || !confirmPass}
        center
        preset={ButtonStylePreset.EditButton}
        text="Reset password"
        onClick={onResetPass}
      />
    </>
  );
};
