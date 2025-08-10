import { FC } from "react";

import IInputProps from "./props";
import { FieldWrapper, ImgWrapper, InputField } from "./styles";
import { Img } from "..";
import { IMAGES } from "../../assets";
import { FieldHeading } from "../FieldHeading";

export const Input: FC<IInputProps> = ({
  title,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  width,
  isSearch,
  ...restProps
}) => (
  <FieldWrapper
    width={width}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
  >
    {title && <FieldHeading marginLeft={50}>{title}</FieldHeading>}

    <InputField isSearch={isSearch} {...restProps} />

    {isSearch && (
      <ImgWrapper>
        <Img src={IMAGES.SEARCH_LOUP} width={16} />
      </ImgWrapper>
    )}
  </FieldWrapper>
);
