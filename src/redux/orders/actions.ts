import { FETCH_ORDERS, SET_ORDERS, SET_ORDERS_FETCHING } from "./constants";
import { IResponseOrders } from "../../utils/types";

// ========= Types ========= //

export type OrdersActions =
  | IFetchOrdersAction
  | ISetOrdersAction
  | ISetOrdersFetchingAction;

export interface IFetchOrdersAction {
  type: typeof FETCH_ORDERS;
}
export interface IFetchRestaurantOrdersAction {
  type: typeof FETCH_ORDERS;
  id: string;
}

export interface ISetOrdersAction {
  type: typeof SET_ORDERS;
  payload: IResponseOrders;
}

export interface ISetOrdersFetchingAction {
  type: typeof SET_ORDERS_FETCHING;
  payload: boolean;
}

// ========= Actions ========= //

export const fetchOrders = (): IFetchOrdersAction => ({ type: FETCH_ORDERS });
export const fetchRestaurantOrders = (id: string): IFetchRestaurantOrdersAction => ({ type: FETCH_ORDERS, id });

export const setOrders = (orders: IResponseOrders): ISetOrdersAction => ({
  type: SET_ORDERS,
  payload: orders,
});

export const setOrdersFetching = (
  isFetch: boolean
): ISetOrdersFetchingAction => ({
  type: SET_ORDERS_FETCHING,
  payload: isFetch,
});
