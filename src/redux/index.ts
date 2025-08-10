import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { appReducer } from "./app";
import { authReducer } from "./auth";
import { ordersReducer } from "./orders";
import { cuisinesReducer } from "./cuisine";
import { settingsReducer } from "./settings";
import { restaurantReducer } from "./restaurant";
import rootSaga from "../sagas";

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  restaurant: restaurantReducer,
  cuisines: cuisinesReducer,
  orders: ordersReducer,
  settings: settingsReducer,
});

const sagaMiddleware = createSagaMiddleware();

// const enhancers: StoreEnhancer[] = [applyMiddleware(sagaMiddleware)];

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type AppAction = ReturnType<AppDispatch>;
export type AppState = ReturnType<typeof store.getState>;
