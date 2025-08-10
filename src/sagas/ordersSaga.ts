import { all, call, put, takeLatest } from "redux-saga/effects";

import { api } from "../utils/api";
import { IResponse } from "../utils/types";
import { setAppError } from "../redux/app/actions";
import { IFetchRestaurantOrdersAction, setOrders, setOrdersFetching } from "../redux/orders/actions";
import { FETCH_ORDERS } from "../redux/orders/constants";

function* fetchOrders() {
  yield put(setOrdersFetching(true));
  try {
    const res: IResponse = yield call(api.fetchOrders);
    if (res.data) {
      yield put(setOrders(res.data));
    }
  } catch (err) {
    //@ts-ignore
    yield put(setAppError(err.message));
  } finally {
    yield put(setOrdersFetching(false));
  }
}

function* fetchRestaruntOrders({ id }: IFetchRestaurantOrdersAction) {
  yield put(setOrdersFetching(true));
  try {
    const res: IResponse = yield call(api.fetchRestaurantOrders, id);
    if (res.data) {
      yield put(setOrders({ orders: res.data.restarantOrders, totalOrdersCount: res.data.restarantOrders.length }));
    }
  } catch (error) {
    //@ts-ignore
    yield put(setAppError(error.message));
  } finally {
    yield put(setOrdersFetching(false));
  }
}

export function* ordersSaga() {
  yield all([takeLatest(FETCH_ORDERS, fetchRestaruntOrders)]);
  // yield all([takeLatest(FETCH_ORDERS, fetchOrders)]);
}
