import { FC } from "react";

import ITextProps from "./props";
import { UniversalText } from "./styles";

export const Text: FC<ITextProps> = ({ children, ...restProps }) => (
  <UniversalText {...restProps}>{children}</UniversalText>
);
