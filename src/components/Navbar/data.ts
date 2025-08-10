import { IMAGES } from "../../assets";
import { Routes } from "../../utils/constants";

const {
  HOME,
  MENU,
  STAFF,
  ANALYTICS,
  NOTIFICATION,
  ORDERS,
  PAYMENTS,
  SETTINGS,
  ALL_RESTAURANTS,
} = IMAGES.panel;
const {
  Orders,
  Menu,
  Staff,
  Notification,
  Payments,
  Settings,
  Analytics,
  Home,
  AllRestaurants: MyRestaurants,
} = Routes;

export const panelItems = [
  { name: "Home", img: HOME, path: Home },
  { name: "All restaurants", img: ALL_RESTAURANTS, path: MyRestaurants },
  { name: "Menu", img: MENU, path: Menu },
  { name: "Staff", img: STAFF, path: Staff },
  // { name: "Reservation", img: RESERVATION, path: "" },
  { name: "Analytics", img: ANALYTICS, path: Analytics },
  { name: "Notifications", img: NOTIFICATION, path: Notification },
  { name: "Orders", img: ORDERS, path: Orders },
  { name: "Payments History", img: PAYMENTS, path: Payments },
  { name: "Settings", img: SETTINGS, path: Settings },
];
