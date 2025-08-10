import { FC } from "react";

import IWarningProps from "./props";
import { WarningText, Wrapper } from "./styles";
import { Img } from "..";
import { IMAGES } from "../../assets";

export const Warning: FC<IWarningProps> = ({ text, ...restProps }) => (
  <Wrapper {...restProps}>
    <Img src={IMAGES.WARNING} marginRight={15} />
    <WarningText>{text}</WarningText>
  </Wrapper>
);
