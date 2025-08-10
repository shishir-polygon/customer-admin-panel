import { FC } from "react";

import ITextareaProps from "./props";
import { TextareaWrapper, TextField } from "./styles";
import { FieldHeading } from "../FieldHeading";

export const Textarea: FC<ITextareaProps> = ({
  title,
  marginBottom,
  width,
  ...restProps
}) => (
  <TextareaWrapper marginBottom={marginBottom} width={width}>
    {title && <FieldHeading marginLeft={50}>{title}</FieldHeading>}
    <TextField {...restProps}></TextField>
  </TextareaWrapper>
);
