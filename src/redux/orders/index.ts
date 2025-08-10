import { OrdersActions } from "./actions";
import { SET_ORDERS, SET_ORDERS_FETCHING } from "./constants";
import { IOrder } from "../../utils/types";

export interface IOrdersState {
  orders: IOrder[];
  totalOrdersCount: number;
  fetching: boolean;
}

const INIT_STATE: IOrdersState = {
  orders: [],
  totalOrdersCount: 0,
  fetching: false,
};

export const ordersReducer = (
  state: IOrdersState = INIT_STATE,
  action: OrdersActions
): IOrdersState => {
  switch (action.type) {
    case SET_ORDERS:
      return { ...state, ...action.payload };
    case SET_ORDERS_FETCHING:
      return { ...state, fetching: action.payload };
    default:
      return state;
  }
};
