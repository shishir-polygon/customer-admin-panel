import { FC } from "react";

import IButtonProps from "./props";
import { AnimationElement, ButtonText, ButtonWrapper } from "./styles";
import { ButtonStylePreset } from "../../utils/types";

export const Button: FC<IButtonProps> = ({ text, ...restProps }) => (
  <ButtonWrapper {...restProps}>
    {restProps.preset === ButtonStylePreset.AnimationButton && (
      <AnimationElement />
    )}
    <ButtonText {...restProps}>{text}</ButtonText>
  </ButtonWrapper>
);
