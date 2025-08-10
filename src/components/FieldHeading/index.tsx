import { FC } from "react";

import IFieldHeadingProps from "./props";
import { HeadingText } from "./styles";

export const FieldHeading: FC<IFieldHeadingProps> = ({
  children,
  ...restProps
}) => <HeadingText {...restProps}>{children}</HeadingText>;
