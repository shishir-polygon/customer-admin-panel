import {
  ADD_RESTAURANT,
  ADD_RESTAURANT_PHOTO,
  SET_ADDED_RESTAURANT,
  SET_CUISINES_STEP,
  EDIT_RESTAURANT,
  CLEAR_ADDED_RESTAURANT,
  SET_RESTAURANT,
  GET_RESTAURANT,
  SET_MY_RESTAURANTS,
  GET_RESTAURANTS,
  GET_MENU,
  SET_MENU,
  CLEAR_CURRENT_RESTAURANT,
  SET_PRODUCT,
  GET_PRODUCTS,
  SET_LOADING_STATUS,
  SET_NEW_RESTAURANT_PHOTO,
} from "./constants";
import {
  IAddRestaurant,
  IAddRestaurantPhoto,
  IMenu,
  IProduct,
  IRestaurant,
  IUpdRestaurant,
} from "../../utils/types";

// ========= Types ========= //

export type RestaurantActions =
  | IAddRestaurantAction
  | ISetAddedRestaurantAction
  | ISetCuisineTriggerAction
  | IClearAddedRestaurantAction
  | ISetRestaurantAction
  | ISetRestaurantsAction
  | ISetMenuAction
  | IClearAddedRestaurantAction
  | IClearCurrentRestaurantAction
  | ISetProductAction
  | IFetchProductActon
  | ISetLoadingStatusAction
  | ISetNewRestaurantPhotoAction;

export interface IAddRestaurantAction {
  type: typeof ADD_RESTAURANT;
  payload: IAddRestaurant;
}

export interface IAddRestaurantPhotoAction {
  type: typeof ADD_RESTAURANT_PHOTO;
  payload: IAddRestaurantPhoto;
  callback?: () => void;
}

export interface ISetAddedRestaurantAction {
  type: typeof SET_ADDED_RESTAURANT;
  payload: IRestaurant;
}

export interface ISetCuisineTriggerAction {
  type: typeof SET_CUISINES_STEP;
  payload: boolean;
}

export interface IClearAddedRestaurantAction {
  type: typeof CLEAR_ADDED_RESTAURANT;
}

export interface ISetRestaurantAction {
  type: typeof SET_RESTAURANT;
  payload: IRestaurant;
}
export interface IEditRestaurantAction {
  type: typeof EDIT_RESTAURANT;
  payload: IUpdRestaurant;
  callback: () => void;
}

export interface IGetRestaurantAction {
  type: typeof GET_RESTAURANT;
  payload: string;
}

export interface IGetRestaurantsAction {
  type: typeof GET_RESTAURANTS;
}

export interface ISetRestaurantsAction {
  type: typeof SET_MY_RESTAURANTS;
  payload: IRestaurant[];
}

export interface IGetMenuAction {
  type: typeof GET_MENU;
  payload: string;
}

export interface ISetMenuAction {
  type: typeof SET_MENU;
  payload: IMenu;
}

export interface IClearCurrentRestaurantAction {
  type: typeof CLEAR_CURRENT_RESTAURANT;
}

export interface ISetProductAction {
  type: typeof SET_PRODUCT;
  payload: IProduct[];
}

export interface IFetchProductActon {
  type: typeof GET_PRODUCTS;
  payload: string;
}

export interface ISetLoadingStatusAction {
  type: typeof SET_LOADING_STATUS;
  payload: boolean;
}

export interface ISetNewRestaurantPhotoAction {
  type: typeof SET_NEW_RESTAURANT_PHOTO;
  payload: string;
}

// ========= Saga Actions ========= //

export const editRestaurant = (
  restaurant: IUpdRestaurant,
  callback: () => void
): IEditRestaurantAction => ({
  type: EDIT_RESTAURANT,
  payload: restaurant,
  callback,
});

export const getRestaurants = (): IGetRestaurantsAction => ({
  type: GET_RESTAURANTS,
});

export const getRestaurant = (restaurantId: string): IGetRestaurantAction => ({
  type: GET_RESTAURANT,
  payload: restaurantId,
});

export const addRestaurantPhoto = (
  data: IAddRestaurantPhoto,
  callback?: () => void
): IAddRestaurantPhotoAction => ({
  type: ADD_RESTAURANT_PHOTO,
  payload: data,
  callback,
});

export const getMenu = (restaurantId: string): IGetMenuAction => ({
  type: GET_MENU,
  payload: restaurantId,
});

export const fetchProducts = (deilevectId: string): IFetchProductActon => ({
  type: GET_PRODUCTS,
  payload: deilevectId,
});

// ========== Actions ========= //

export const setRestaurantLoading = (
  isLoading: boolean
): ISetLoadingStatusAction => ({
  type: SET_LOADING_STATUS,
  payload: isLoading,
});

export const addRestaurant = (
  restaurant: IAddRestaurant
): IAddRestaurantAction => ({
  type: ADD_RESTAURANT,
  payload: restaurant,
});

export const setAddedRestaurant = (
  restaurant: IRestaurant
): ISetAddedRestaurantAction => ({
  type: SET_ADDED_RESTAURANT,
  payload: restaurant,
});

export const setCuisineTrigger = (
  isAdded: boolean
): ISetCuisineTriggerAction => ({
  type: SET_CUISINES_STEP,
  payload: isAdded,
});

export const clearAddedRestaurantInfo = (): IClearAddedRestaurantAction => ({
  type: CLEAR_ADDED_RESTAURANT,
});

export const setRestaurants = (
  restaurants: IRestaurant[]
): ISetRestaurantsAction => ({
  type: SET_MY_RESTAURANTS,
  payload: restaurants,
});

export const setRestaurant = (
  restaurant: IRestaurant
): ISetRestaurantAction => ({
  type: SET_RESTAURANT,
  payload: restaurant,
});

export const setMenu = (menu: IMenu): ISetMenuAction => ({
  type: SET_MENU,
  payload: menu,
});

export const clearCurrentRestaurant = (): IClearCurrentRestaurantAction => ({
  type: CLEAR_CURRENT_RESTAURANT,
});

export const setProduct = (products: IProduct[]): ISetProductAction => ({
  type: SET_PRODUCT,
  payload: products,
});

export const setNewRestaurantPhoto = (
  photo: string
): ISetNewRestaurantPhotoAction => ({
  type: SET_NEW_RESTAURANT_PHOTO,
  payload: photo,
});
