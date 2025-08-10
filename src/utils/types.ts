import { FC } from "react";
import { TransitionStatus } from "react-transition-group";

import { Cuisines, ProductTags, SettingsCategory } from "./constants";

export enum ButtonStylePreset {
  BaseButtonWithBackground = "BaseButtonWithBackground",
  EditButton = "EditButton",
  AttentionalButton = "AttentionalButton",
  AnimationButton = "AnimationButton",
}

export enum OrderStatusType {
  Open = "open",
  Pending = "pending",
  Closed = "closed",
  Failed = "failed",
}

export enum Position {
  Managers = "managers",
  SeniorWaiter = "seniorWaiter",
  Waiter = "waiters",
  GeneralManager = "generalManager",
}

export enum Role {
  Admin = "admin",
  User = "user",
}

export interface IAnimationScreenProps {
  animationState?: TransitionStatus;
}
export interface IRoutes {
  Component: FC;
  path: string;
}
export interface ICuisine {
  order: number;
  _id: string;
  img?: string;
  title: Cuisines;
}

export interface IOrderItem {
  name: string;
  plu: string;
  price: number;
  productType: number;
  quantity: number;
  subItems: any[];
}

export interface ICustomer {
  name: string;
  phoneNumber: string;
  email: string;
}

export interface IOrderPayment {
  amount: number;
  type: number;
}
export interface IOrder {
  additionalPayers: any[];
  channelLinkId: string;
  createdAt: string;
  customer: ICustomer;
  decimalDigits: number;
  deliveryTime: string;
  discountTotal: number;
  estimatedPickupTime: string;
  items: IOrderItem[];
  note: string;
  orderIsAlreadyPaid: boolean;
  orderType: number;
  payers: any[];
  payment: IOrderPayment;
  pickupTime: string;
  restaurantId: string;
  status: OrderStatusType;
  table: string;
  updatedAt: string;
  userId: string;
  __v: number;
  _id: string;
  deliveryIsAsap: boolean;
  numberOfCustomers: number;
}
//deliveryIsAsap
//numberOfCustomers

// export type OrderStatusType = "Pending" | "e"

export interface IResponseOrders {
  orders: IOrder[];
  totalOrdersCount: number;
}

export interface IMenuItem {
  name: string;
  id: string;
  ingredients: string;
  price: number;
  sale?: number;
  presence: boolean;
}

export interface IWorker {
  name: string;
  started: string;
  position: Position;
  id: string;
}

export interface IPayment {
  name: string;
  time: string;
  card: string;
  method: string;
  status: boolean;
  sum: number;
  id: string;
}

export interface ISettings {
  name: SettingsCategory;
  icon: string;
  id: string;
}

export interface IErrorResponse {
  message: string;
  code: number;
}

export interface IResponse<T = any> {
  result: boolean;
  error: IErrorResponse;
  data: T;
}

export interface IVerifyNumberForm {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface ISignUpAndSingInForm {
  email: string;
  password: string;
  phoneNumber: string;
}

export interface IVerifyNumberResponse {
  phoneNumber: string;
  password: string;
  verificationCode: string;
}

export interface ITokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface ISignUp extends ISignUpAndSingInForm {
  role: "admin";
  restaurantId: null;
}

export interface ILogin {
  phoneNumber: string;
  password: string;
}

export interface IUserData {
  favoriteRestaurants: any[];
  allergens: any[];
  emailVerified: boolean;
  phoneVerified: boolean;
  birthday: null | string;
  gender: null | string;
  restaurantId: null | string;
  avatar: null | string;
  lastName: null | string;
  firstName: null | string;
  _id: string;
  role: Role;
  phoneNumber: string;
  email: string;
  status: "pending";
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

export interface IAddRestaurantForm {
  name: string;
  about: string;
}

export interface IAddRestaurantPhoto {
  restaurantId: string;
  photo: File;
  isNewRestaurant?: boolean;
}

export interface IAddRestaurant {
  name: string;
  about: string;
  instagramLink: string;
  googleLink: string;
  open: string;
  close: string;
  adminId: string;
}

export interface IAddRestaurantRequest extends IAddRestaurant {
  photo: File;
}

export interface IUpdRestaurant {
  name?: string;
  about?: string;
  instagramLink?: string;
  open?: string;
  close?: string;
  cuisines?: string[];
  googlePlaceId?: string;
  _id: string;
}

export interface IRestaurant {
  cuisines: string[];
  deliverectCurrency: number;
  payLater: boolean;
  busyMode: string;
  photos: any[];
  restaurantPlace?: {
    address: string;
    createdAt: string;
    openingHours: [
      {
        close: { day: number; time: number };
        open: { day: number; time: number };
        dayNumber: number;
      }
    ];
    placeId: string;
    position: {
      type: string;
      coordinates: number[];
      _id: string;
    };
    priceLevel: number;
    rating: number;
    restaurantId: string;
    updatedAt: string;
    __v: number;
    _id: string;
  };
  _id: string;
  name: string;
  about: string;
  instagramLink: string;
  googleLink: string;
  open: string;
  close: string;
  status: string;
  admin: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  googlePlace?: google.maps.places.PlaceResult;
}

export interface IAllRestaurantsResponse {
  restaurants: IRestaurant[];
  totalRestaurantsCount: number;
}

export interface IAddressComponents {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface IOpeningHoursPeriod {
  close: {
    day: number;
    hours: number;
    minutes: number;
    nextDate: number;
    time: string;
  };
  open: {
    day: number;
    hours: number;
    minutes: number;
    nextDate: number;
    time: string;
  };
}

export interface IGooglePhoto {
  getUrl: () => void;
  width: number;
  height: number;
  html_attributions: string[];
}

export interface IGoogleReview {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface IGoogleDetails {
  address_components?: IAddressComponents[];
  adr_address?: string;
  business_status?: string;
  formatted_address?: string;
  formatted_phone_number?: string;
  geometry?: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      lat: number;
      lng: number;
    };
  };
  html_attributions?: any[];
  icon?: string;
  icon_background_color?: string;
  icon_mask_base_uri?: string;
  international_phone_number?: string;
  name?: string;
  opening_hours?: {
    periods: IOpeningHoursPeriod[];
    weekday_text: string[];
    isOpen: () => void;
    open_now: boolean;
  };
  photos?: IGooglePhoto[];
  place_id?: string;
  plus_code?: { compound_code: string; global_code: string };
  rating?: number;
  reference?: string;
  reviews?: IGoogleReview[];
  types?: string[];
  url?: string;
  user_ratings_total?: number;
  utc_offset?: number;
  utc_offset_minutes?: number;
  vicinity?: string;
  website?: string;
}

export interface IRestaurantMenu {
  availabilities: any[];
  channelLinkId: string;
  createdAt: string;
  currency: number;
  deliverectMenuId: string;
  description: string;
  menuImageURL: string;
  menuName: string;
  menuType: number;
  nestedModifiers: boolean;
  productTags: number[];
  updatedAt: string;
  validations: [];
  __v: number;
  _id: string;
}

export interface IMenuCategory {
  account: string;
  availabilities: [];
  createdAt: string;
  deliverectId: string;
  description: string;
  imageUrl: string;
  level: number;
  menu: string;
  name: string;
  posCategoryId: string;
  posCategoryType: string;
  posLocationId: string;
  subCategories: any[];
  subProductSortOrder: any[];
  updatedAt: string;
  _id: string;
}

export interface IProduct {
  account: string;
  capacityUsages: any[];
  channelLinkId: string;
  createdAt: string;
  deliverectId: string;
  deliveryTax: number;
  description: string;
  descriptionTranslations?: { nl: string };
  imageUrl: string;
  location: string;
  max: number;
  menuCategory: string;
  min: number;
  multiply: number;
  name: string;
  nameTranslations: { nl: string };
  parentId: string;
  plu: string;
  posCategoryIds: string[];
  posProductCategoryId: string[];
  posProductId: string;
  price: number;
  productTags: number[];
  productType: number;
  snoozed: boolean;
  sortOrder: number;
  status: string;
  subProductSortOrder: any[];
  subProducts: string[];
  takeawayTax: number;
  updatedAt: string;
  visible: boolean;
  _id: string;
}

export interface IMenu {
  menu: IRestaurantMenu;
  menuCategories: IMenuCategory[];
}

export interface IServiceCharge {
  isPercent: boolean;
  charge: string;
}

export interface IPaymentSetting {
  payPall: string;
  tipsPayPall: string;
  withStripe: boolean;
}

export interface IChangePassword {
  oldPassword?: string;
  password?: string;
}

export interface IEditUserProfile extends IChangePassword {
  firstName?: string;
  lastName?: string;
  email?: string;
  gender?: string;
  birthday?: string;
  allergens?: ProductTags[];
  addRestaurantToFavorites?: string;
  removeRestaurantFromFavorites?: string;
}

export interface IVerifyStripeAccount {
  created: number;
  expires_at: number;
  object: string;
  url: string;
}

export type MenuType = "All day menu" | "Brunch" | "Lunch" | "Dinner";

export type CuisineType =
  | "Indian"
  | "Italian"
  | "Chinese"
  | "Spanish"
  | "French"
  | "Lebanese"
  | "British"
  | "Japanese"
  | "Mexican"
  | "Turkish"
  | "Thai"
  | "Pub Food"
  | "American"
  | "Chicken"
  | "Pizza"
  | "Burgers";

export type GoogleMapLibrary =
  | "places"
  | "drawing"
  | "geometry"
  | "localContext"
  | "visualization";

export type NotificationPopUpType = "error" | "success";

export type IAnimationStateType =
  | "exited"
  | "entering"
  | "entered"
  | "exiting"
  | "exited"
  | "unmounted";
