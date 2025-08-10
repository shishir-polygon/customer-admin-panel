import {
  AddRestaurantScreen,
  AnalyticsScreen,
  HomeScreen,
  LoginScreen,
  MenuScreen,
  NotificationsScreen,
  OrdersScreen,
  PaymentsHistoryScreen,
  AllRestaurantsScreen,
  SettingsScreen,
  SignUpScreen,
  StaffScreen,
} from "../screens";
import { Routes } from "../utils/constants";
import { IRoutes } from "../utils/types";

const {
  SignUp,
  Login,
  AllRestaurants,
  Home,
  AddRestaurant,
  Orders,
  Menu,
  Staff,
  Notification,
  Payments,
  Settings,
  Analytics,
} = Routes;

export const routes: IRoutes[] = [
  { Component: SignUpScreen, path: SignUp },
  { Component: LoginScreen, path: Login },
];

export const authRoutes: IRoutes[] = [
  { Component: HomeScreen, path: Home },
  { Component: AddRestaurantScreen, path: AddRestaurant },
  { Component: OrdersScreen, path: Orders },
  { Component: MenuScreen, path: Menu },
  { Component: StaffScreen, path: Staff },
  { Component: NotificationsScreen, path: Notification },
  { Component: PaymentsHistoryScreen, path: Payments },
  { Component: AllRestaurantsScreen, path: AllRestaurants },
  { Component: SettingsScreen, path: Settings },
  { Component: AnalyticsScreen, path: Analytics },
];
