import { IRestaurant } from "../../utils/types";

export default interface IRestaurantListItemProps {
  restaurant: IRestaurant;
  index: number;
  animationState?: string;
}
