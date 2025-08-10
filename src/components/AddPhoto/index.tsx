import { FC } from "react";

import IAddPhotoProps from "./props";
import { AddPhotoBlock } from "./styles";

export const AddPhoto: FC<IAddPhotoProps> = ({
  children,
  onClick,
  ...restProps
}) => (
  <AddPhotoBlock {...restProps} onClick={onClick}>
    {children}
  </AddPhotoBlock>
);
