import { all, call, put, takeLatest } from "redux-saga/effects";

import { api, setHeader } from "../utils/api";
import { IResponse, IUserData, ITokenResponse } from "../utils/types";
import { LOGIN, REFRESH_TOKEN, SIGN_UP, VERIFY } from "../redux/auth/constants";
import {
  ILoginAction,
  IRefreshTokenAction,
  ISignUpAction,
  IVerifyAction,
  setUserData,
  successAuthenticated,
  successLogin,
  successVerify,
} from "../redux/auth/actions";
import { setAppError, setFetchingStatus } from "../redux/app/actions";
import { LocalStorage } from "../utils/constants";

function* login(action: ILoginAction) {
  yield put(setFetchingStatus(true));
  try {
    const res: IResponse = yield call(api.login, action.payload);
    if (res.result) {
      yield put(successLogin(action.payload));
    }
  } catch (err) {
    //@ts-ignore
    yield put(setAppError(err.message));
  } finally {
    yield put(setFetchingStatus(false));
  }
}

function* signUp(action: ISignUpAction) {
  yield put(setFetchingStatus(true));
  try {
    const res: IResponse<IUserData> = yield call(api.signUp, action.payload);

    if (res.data?.phoneNumber) {
      const loginRes: IResponse = yield call(api.login, action.payload);
      if (loginRes.result) {
        yield put(successLogin(action.payload));
      }
    }
  } catch (err) {
    //@ts-ignore
    switch (err.code) {
      case 1021:
        yield put(setAppError("User with same phone number already exist"));
        break;
      case 1002:
        yield put(setAppError("User with same email already exist"));
        break;
      default:
        //@ts-ignore
        yield put(setAppError(err.message));
        break;
    }
  } finally {
    yield put(setFetchingStatus(false));
  }
}

function* verifyNumber(action: IVerifyAction) {
  yield put(setFetchingStatus(true));
  try {
    const res: IResponse<ITokenResponse> = yield call(
      api.phoneVerify,
      action.payload
    );

    if (res.data?.access_token) {
      const authMeRes: IResponse = yield call(api.authMe);

      if (authMeRes.result) {
        yield put(setUserData(authMeRes.data));
      }

      yield put(successVerify());
    }
  } catch (err) {
    //@ts-ignore
    yield put(setAppError(err.message));
  } finally {
    yield put(setFetchingStatus(false));
  }
}

function* refreshToken(action: IRefreshTokenAction) {
  const refreshToken = localStorage.getItem(LocalStorage.RefreshToken);
  if (refreshToken) {
    try {
      yield put(setFetchingStatus(true));
      yield call(setHeader, refreshToken);
      const res: IResponse<ITokenResponse> = yield call(
        api.refresh,
        refreshToken
      );

      if (res.data?.access_token) {
        const authMeRes: IResponse = yield call(api.authMe);
        if (authMeRes.result) {
          yield put(setUserData(authMeRes.data));
        }
        yield put(successAuthenticated());
      }
    } catch (err) {
      //@ts-ignore
      yield put(setAppError(err.message));
    } finally {
    }
  }
  yield put(setFetchingStatus(false));
}

export function* authSaga() {
  yield all([
    takeLatest(SIGN_UP, signUp),
    takeLatest(VERIFY, verifyNumber),
    takeLatest(LOGIN, login),
    takeLatest(REFRESH_TOKEN, refreshToken),
  ]);
}
