import { RestaurantActions } from "./actions";
import {
  SET_ADDED_RESTAURANT,
  SET_CUISINES_STEP,
  CLEAR_ADDED_RESTAURANT,
  SET_RESTAURANT,
  SET_MY_RESTAURANTS,
  SET_MENU,
  CLEAR_CURRENT_RESTAURANT,
  SET_PRODUCT,
  SET_LOADING_STATUS,
  SET_NEW_RESTAURANT_PHOTO,
} from "./constants";
import { IMenu, IProduct, IRestaurant } from "../../utils/types";

export interface IRestaurantState {
  cuisinesTrigger: boolean;
  addedRestaurant: IRestaurant | null;
  currentRestaurant: IRestaurant | null;
  restaurants: IRestaurant[];
  restaurantMenu: IMenu;
  products: IProduct[];
  loading: boolean;
}

const INITIAL_STATE: IRestaurantState = {
  cuisinesTrigger: false,
  addedRestaurant: null,
  restaurants: [],
  currentRestaurant: null,
  restaurantMenu: {
    menu: {
      menuName: "",
      availabilities: [],
      validations: [],
      productTags: [],
      currency: 0,
      menuType: 3,
      __v: 0,
      _id: "",
      nestedModifiers: false,
      channelLinkId: "",
      description: "",
      deliverectMenuId: "",
      createdAt: "",
      menuImageURL: "",
      updatedAt: "",
    },
    menuCategories: [],
  },
  products: [],
  loading: false,
};

export const restaurantReducer = (
  state = INITIAL_STATE,
  action: RestaurantActions
): IRestaurantState => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return { ...state, loading: action.payload };
    case SET_ADDED_RESTAURANT:
      return { ...state, addedRestaurant: action.payload };
    case SET_CUISINES_STEP:
      return { ...state, cuisinesTrigger: action.payload };
    case SET_RESTAURANT:
      return {
        ...state,
        currentRestaurant: action.payload,
      };
    case SET_MY_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    case CLEAR_ADDED_RESTAURANT:
      return INITIAL_STATE;
    case SET_MENU:
      return { ...state, restaurantMenu: action.payload };
    case CLEAR_CURRENT_RESTAURANT:
      return { ...state, currentRestaurant: null };
    case SET_PRODUCT:
      return { ...state, products: action.payload };
    case SET_NEW_RESTAURANT_PHOTO:
      return state.currentRestaurant
        ? {
            ...state,
            currentRestaurant: {
              ...state.currentRestaurant,
              photos: [...state.currentRestaurant.photos, action.payload],
            },
          }
        : state;
    default:
      return state;
  }
};
