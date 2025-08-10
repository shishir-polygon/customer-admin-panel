import { FC } from "react";

import { BackgroundWrapper, Img } from "./styles";
import IBackgroundProps from "./props";
import { IMAGES } from "../../assets";

export const Background: FC<IBackgroundProps> = ({ children, paddingLeft }) => (
  <BackgroundWrapper paddingLeft={paddingLeft}>
    <Img width={370} height={470} top="-36" left="0" src={IMAGES.LEAF} />
    <Img width={380} bottom="0" left="0" src={IMAGES.LEAF_BOTTOM} />
    <Img width={340} top="0" right="0" src={IMAGES.LEAF_SEC} />
    <Img width={610} bottom="0" right="0" src={IMAGES.BAMBOO} />
    {children}
  </BackgroundWrapper>
);
