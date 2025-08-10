import { FC } from "react";

import IHeadingProps from "./props";
import { SecondLvlHeading } from "./styles";

export const Heading: FC<IHeadingProps> = ({ text, ...restProps }) => (
  <SecondLvlHeading {...restProps}>{text}</SecondLvlHeading>
);
