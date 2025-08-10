import { FC } from "react";

import ITitleProps from "./props";
import { CommonTitle } from "./styles";

export const Title: FC<ITitleProps> = ({ text, ...restProps }) => (
  <CommonTitle {...restProps}>{text}</CommonTitle>
);
