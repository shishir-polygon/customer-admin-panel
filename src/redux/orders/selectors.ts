import { IOrdersState } from ".";
import { AppState } from "..";

export const ordersSelector = (state: AppState): IOrdersState => state.orders;
