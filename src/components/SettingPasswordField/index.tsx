import { ChangeEvent, FC } from "react";

import ISettingPasswordFieldProps from "./props";
import { Input, Title } from "..";

export const SettingPasswordField: FC<ISettingPasswordFieldProps> = ({
  title,
  value,
  setValue,
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <Title text={title} fontSize={18} lineHeight={26} />
      <Input
        value={value}
        onChange={onChangeHandler}
        type="password"
        placeholder="********"
        borderRadius={5}
        marginLeft={20}
      />
    </>
  );
};
