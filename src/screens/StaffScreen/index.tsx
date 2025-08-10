import { FC } from "react";

import IStaffScreenProps from "./props";
import { Wrapper } from "./styles";
import { Heading, SmoothEffect, Staff } from "../../components";

export const StaffScreen: FC<IStaffScreenProps> = () => (
  <SmoothEffect>
    <Wrapper>
      <Heading bolder text="Staff" marginLeft={20} textAlign="left" />
      <Staff />
    </Wrapper>
  </SmoothEffect>
);
