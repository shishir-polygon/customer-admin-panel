import { ChangeEvent, FC, useState } from "react";

import { positions } from "./data";
import IAddStaffProps from "./props";
import { Wrapper } from "./styles";
import { Button, Input, Title, DropDownList } from "..";
import { Position } from "../../utils/types";

export const AddStaff: FC<IAddStaffProps> = ({ onSaveStaff }) => {
  const [position, setPosition] = useState<Position>(Position.Managers);
  const [name, setName] = useState("");

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);

  const saveNewStaffHandler = () => {
    onSaveStaff({
      id: (Math.random() * 10000).toString(),
      position: position,
      name: "Jane Smith",
      started: "Today",
    });
  };

  return (
    <Wrapper>
      <Title
        text="Add staff"
        fontSize={24}
        fontWeight="bold"
        textAlign="center"
        marginBottom={30}
        marginTop={0}
      />

      <Title
        text="Position"
        fontSize={18}
        fontWeight="bold"
        textAlign="left"
        marginBottom={10}
        marginTop={0}
      />
      <DropDownList items={positions} onCheckItem={setPosition} />

      <Title
        text="Name"
        fontSize={18}
        fontWeight="bold"
        textAlign="left"
        marginBottom={10}
        marginTop={0}
      />
      <Input
        value={name}
        onChange={onChangeName}
        height={42}
        borderRadius={5}
        marginBottom={40}
      />

      <Button center text="Add" onClick={saveNewStaffHandler} />
    </Wrapper>
  );
};
