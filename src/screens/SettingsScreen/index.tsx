import { FC } from "react";

import ISettingsScreenProps from "./props";
import { HeadingWrapper, Wrapper } from "./styles";
import { Heading, Settings, SmoothEffect } from "../../components";

export const SettingsScreen: FC<ISettingsScreenProps> = () => (
  <SmoothEffect>
    <Wrapper>
      <HeadingWrapper>
        <Heading bolder text="Settings" textAlign="left" />
      </HeadingWrapper>
      <Settings />
    </Wrapper>
  </SmoothEffect>
);
