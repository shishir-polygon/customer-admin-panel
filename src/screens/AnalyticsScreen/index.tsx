import { FC } from "react";

import IAnalyticsScreenProps from "./props";
import { Wrapper } from "./styles";
import { Heading, SmoothEffect, TodayAnalytics } from "../../components";

export const AnalyticsScreen: FC<IAnalyticsScreenProps> = () => (
  <SmoothEffect>
    <Wrapper>
      <Heading bolder text="Analytics" textAlign="left" />
      <TodayAnalytics />
    </Wrapper>
  </SmoothEffect>
);
