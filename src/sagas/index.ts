import { all } from "redux-saga/effects";

import { authSaga } from "./authSaga";
import { ordersSaga } from "./ordersSaga";
import { settingSaga } from "./settingsSaga";
import { cuisinesSaga } from "./cuisinesSaga";
import { restaurantSaga } from "./restaurantsSaga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    restaurantSaga(),
    cuisinesSaga(),
    ordersSaga(),
    settingSaga(),
  ]);
}
