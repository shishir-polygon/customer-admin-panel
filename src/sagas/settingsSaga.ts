import { all, call, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { put } from "redux-saga/effects";

import { api } from "../utils/api";
import { ErrorCode } from "../utils/constants";
import { IResponse, IVerifyStripeAccount } from "../utils/types";
import { setAppError } from "../redux/app/actions";
import { setUserData } from "../redux/auth/actions";
import {
  IChangeEmailAction,
  IChangePasswordAction,
  IConnectedStripeAction,
  setSettingsFetching,
  setStripeStatus,
} from "../redux/settings/actions";
import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CONNECTED_STRIPE,
} from "../redux/settings/constants";

function* changeEmail(action: IChangeEmailAction) {
  yield put(setSettingsFetching(true));
  try {
    const res: AxiosResponse = yield call(api.editUser, action.payload.userId, {
      email: action.payload.email,
    });

    if (res.data) {
      yield put(setUserData(res.data));
    }
  } catch (err) {
    //@ts-ignore
    yield put(setAppError(err.message));
  } finally {
    yield put(setSettingsFetching(false));
  }
}

function* changePassword({
  payload: { userId, oldPassword, password },
  callback,
}: IChangePasswordAction) {
  yield put(setSettingsFetching(true));
  try {
    const res: AxiosResponse = yield call(api.editUser, userId, {
      oldPassword,
      password,
    });
    if (res.data) {
      yield put(setUserData(res.data));
      callback();
    }
  } catch (err) {
    //@ts-ignore
    yield put(setAppError(err.message));
  } finally {
    yield put(setSettingsFetching(false));
  }
}

function* verifyStripeAccountLink(restaurantId: string) {
  try {
    const res: IVerifyStripeAccount = yield call(
      api.stripeAccountLink,
      restaurantId
    );

    return res;
  } catch (err) {
    //@ts-ignore
    if (err.code === ErrorCode.StripeAccountLink) {
      return;
    } else {
      //@ts-ignore
      yield put(setAppError(err.message));
    }
  }
}

function* connectRestaurantToStripe({
  payload,
  callback,
}: IConnectedStripeAction) {
  yield put(setSettingsFetching(true));

  try {
    const verifyRes: IResponse<IVerifyStripeAccount> = yield call(
      verifyStripeAccountLink,
      payload
    );

    if (!verifyRes?.data) {
      const res: IResponse<string> = yield call(
        api.connectedRestaurantToStripe,
        payload
      );

      if (res.data) {
        callback(res.data);
      }
    } else {
      yield put(setStripeStatus(true));
    }
  } catch (err) {
    //@ts-ignore
    yield put(setAppError(err.message));
  } finally {
    yield put(setSettingsFetching(false));
  }
}

export function* settingSaga() {
  yield all([
    takeLatest(CHANGE_EMAIL, changeEmail),
    takeLatest(CHANGE_PASSWORD, changePassword),
    takeLatest(CONNECTED_STRIPE, connectRestaurantToStripe),
  ]);
}
