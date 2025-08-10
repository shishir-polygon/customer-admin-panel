import { FC } from "react";

import ITodayAnalyticsProps from "./props";
import { ImgWrapper, Wrapper } from "./styles";
import { Img } from "..";
import { IMAGES } from "../../assets";

export const TodayAnalytics: FC<ITodayAnalyticsProps> = () => (
  <Wrapper>
    <Img src={IMAGES.MOCK_SCHEDULE} width={490} height={242} />

    <ImgWrapper>
      <Img src={IMAGES.MOCK_ORDER} width={222} height={242} />
      <Img src={IMAGES.MOCK_PAYMENTS} width={222} height={242} />
    </ImgWrapper>

    <Img src={IMAGES.MOCK_TRENDING} width={490} height={351} />
    <Img src={IMAGES.MOCK_RESERVATIONS} width={475} height={351} />
  </Wrapper>
);
