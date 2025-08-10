import { CuisineType } from "./types";

export enum LocalStorage {
  Token = "token",
  RefreshToken = "refreshToken",
  RestaurantID = "restaurant_ID",
}

export enum Routes {
  Home = "/home",
  SignUp = "/sign-up",
  Login = "/login",
  AllRestaurants = "/restaurants",
  AddRestaurant = "/add-restaurant",
  Orders = "/orders",
  Menu = "/menu",
  Staff = "/staff",
  Notification = "/notifications",
  Payments = "/payments",
  Settings = "/settings",
  Analytics = "/analytics",
}

export enum ProductTags {
  Celery = 100,
  Gluten = 101,
  Crustaceans = 102,
  Fish = 103,
  Eggs = 104,
  Lupin = 105,
  Milk = 106,
  Molluscs = 107,
  Mustard = 108,
  Nuts = 109,
  Peanuts = 110,
  Sesame = 111,
  Soya = 112,
  Sulphites = 113,
  Almonds = 114,
  Barley = 115,
  BrazilNuts = 116,
  Cashew = 117,
  Hazelnuts = 118,
  Kamut = 119,
  Macadamia = 120,
  Oats = 121,
  Pecan = 122,
  Pistachios = 123,
  Rye = 124,
  Spelt = 125,
  Walnuts = 126,
  Wheat = 127,
  NoAllergens = 1000,
  GlutenFree = 1101,
  Vegetarian = 5,
  Vegan = 4,
  Kosher = 3,
  Halal = 2,
  Alcohol = 1,
}

// export const Ingredients: Record<ProductTags, string> = {
export const Ingredients: Record<ProductTags, string> = {
  100: "Celery",
  101: "Gluten",
  102: "Crustaceans",
  103: "Fish",
  104: "Eggs",
  105: "Lupin",
  106: "Milk",
  107: "Molluscs",
  108: "Mustard",
  109: "Nuts",
  110: "Peanuts",
  111: "Sesame",
  112: "Soya",
  113: "Sulphites",
  114: "Almonds",
  115: "Barley",
  116: "Brazil nuts",
  117: "Cashew",
  118: "Hazelnuts",
  119: "Kamut",
  120: "Macadamia",
  121: "Oats",
  122: "Pecan",
  123: "Pistachios",
  124: "Rye",
  125: "Spelt",
  126: "Walnuts",
  127: "Wheat",
  1000: "No allergens",
  1101: "Gluten free",
  5: "Vegetarian",
  4: "Vegan",
  3: "Kosher",
  2: "Halal",
  1: "Alcohol",
};

export enum Cuisines {
  Indian = "Indian",
  Italian = "Italian",
  Chinese = "Chinese",
  Spanish = "Spanish",
  French = "French",
  Lebanese = "Lebanese",
  British = "British",
  Japanese = "Japanese",
  Mexican = "Mexican",
  Turkish = "Turkish",
  Thai = "Thai",
  PubFood = "Pub Food",
  American = "American",
  Chicken = "Chicken",
  Pizza = "Pizza",
  Burgers = "Burgers",
}

export enum OrdersFilter {
  Day = "Day",
  Week = "Week",
  Month = "Month",
}

export enum WeekFilter {
  Mon = "Mon",
  Tue = "Tue",
  Wed = "Wed",
  Thu = "Thu",
  Fri = "Fri",
  Sat = "Sat",
  Sun = "Sun",
}

export enum Menu {
  AllDayMenu = "All day menu",
  Brunch = "Brunch",
  Lunch = "Lunch",
  Dinner = "Dinner",
}

export enum SettingsCategory {
  ManagerProfile = "Manager Profile",
  DeliverectID = "Deliverect ID",
  Payments = "Payments",
  ServiceCharge = "Service Charge",
  Security = "Security",
}

export enum ErrorCode {
  Unauthorized = 1008,
  StripeAccountLink = 1026,
}

export const cuisinesList: CuisineType[] = [
  "Indian",
  "Italian",
  "Chinese",
  "Spanish",
  "French",
  "Lebanese",
  "British",
  "Japanese",
  "Mexican",
  "Turkish",
  "Thai",
  "Pub Food",
  "American",
  "Chicken",
  "Pizza",
  "Burgers",
];

export const BASE_URL = "http://18.184.66.115:4444/";
// export const BASE_URL = "http://18.133.37.156:4444/";
export const PHOTO_URL = "https://panda-back-end.s3.eu-west-2.amazonaws.com/";
export const GOOGLE_API_KEY = "AIzaSyCVgFnv-mBN96rOl6aAklcqt96VCcHnkv4";
