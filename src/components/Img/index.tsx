import { FC } from "react";

import IImgProps from "./props";
import { UniversalImg } from "./styles";

export const Img: FC<IImgProps> = ({ onClick, style, ...props }) => (
  <UniversalImg style={style} onClick={onClick} {...props} />
);
