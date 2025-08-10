import { FC } from "react";

import ISmoothEffectProps from "./props";
import { Smooth } from "./styles";

export const SmoothEffect: FC<ISmoothEffectProps> = ({ children }) => (
  <Smooth>{children}</Smooth>
);
