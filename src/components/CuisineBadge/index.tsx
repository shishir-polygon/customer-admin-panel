import { FC } from "react";

import ICuisineBadgeProps from "./props";
import { Cuisine, CuisineWrapper, FoodImg } from "./styles";
import { useDelay } from "../../utils/hooks";

export const CuisineBadge: FC<ICuisineBadgeProps> = ({
  index,
  cuisine: { _id, img, title },
  isChecked,
  onCheckCuisine,
}) => {
  const delay = useDelay(index);

  return (
    <CuisineWrapper
      delay={delay}
      checked={isChecked(_id)}
      key={_id}
      onClick={() => onCheckCuisine(_id)}
    >
      <FoodImg src={img} />
      <Cuisine>{title}</Cuisine>
    </CuisineWrapper>
  );
};
