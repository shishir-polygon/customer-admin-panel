import { IRestaurantState } from ".";
import { AppState } from "..";
import { IRestaurant } from "../../utils/types";

export const restaurantSelector = (state: AppState): IRestaurantState =>
  state.restaurant;

export const addedRestaurantSelector = (state: AppState): IRestaurant | null =>
  state.restaurant.addedRestaurant;
