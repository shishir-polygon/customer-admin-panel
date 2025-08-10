import { all, call, put, takeLatest } from "redux-saga/effects";

import { api } from "../utils/api";
import { ICuisine, IResponse } from "../utils/types";
import { IGetCuisinesAction, setCuisines } from "../redux/cuisine/actions";
import { GET_ALL_CUISINES } from "../redux/cuisine/constants";
import { setAppError } from "../redux/app/actions";

function* getAllCuisines({ callback }: IGetCuisinesAction) {
  try {
    const res: IResponse<ICuisine[]> = yield call(api.getCuisines);
    if (res.data) {
      yield put(setCuisines(res.data));
      callback && callback();
    }
  } catch (err) {
    // @ts-ignore
    yield put(setAppError(err.message));
  }
}

export function* cuisinesSaga() {
  yield all([takeLatest(GET_ALL_CUISINES, getAllCuisines)]);
}
