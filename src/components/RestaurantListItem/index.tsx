import { FC } from "react";
import { useHistory } from "react-router-dom";

import IRestaurantListItemProps from "./props";
import { RestaurantImg, RestaurantItem, RestaurantName } from "./styles";
import { IMAGES } from "../../assets";
import { useDelay } from "../../utils/hooks";
import { LocalStorage, PHOTO_URL, Routes } from "../../utils/constants";

export const RestaurantListItem: FC<IRestaurantListItemProps> = ({
  animationState,
  index,
  restaurant,
}) => {
  const history = useHistory();

  const delay = useDelay(index);

  const onRestaurant = (id: string) => {
    localStorage.setItem(LocalStorage.RestaurantID, id);
    history.push(Routes.Home);
  };

  return (
    <RestaurantItem
      delay={delay}
      animationState={animationState}
      className="restaurant"
      onClick={() => onRestaurant(restaurant._id)}
    >
      <RestaurantImg
        src={
          restaurant.photos.length
            ? PHOTO_URL + restaurant.photos[restaurant.photos.length - 1]
            : IMAGES.MOCK_RESTAURANT
        }
      />
      <RestaurantName>{restaurant.name}</RestaurantName>
    </RestaurantItem>
  );
};
