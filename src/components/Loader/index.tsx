import { FC } from "react";

import ILoaderProps from "./props";
import { Spinner, LoaderWrapper } from "./styles";
import { colors } from "../../utils/colors";

export const Loader: FC<ILoaderProps> = ({ mini }) => (
  <LoaderWrapper mini={mini}>
    <Spinner type="Oval" color={colors.VISTA_BLUE} />
  </LoaderWrapper>
);
