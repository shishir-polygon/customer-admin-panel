import { all, call, put, takeLatest } from "redux-saga/effects";

import { api } from "../utils/api";
import {
  IAddRestaurantAction,
  IAddRestaurantPhotoAction,
  IEditRestaurantAction,
  IFetchProductActon,
  IGetMenuAction,
  IGetRestaurantAction,
  setAddedRestaurant,
  setCuisineTrigger,
  setMenu,
  setNewRestaurantPhoto,
  setProduct,
  setRestaurant,
  setRestaurantLoading,
  setRestaurants,
} from "../redux/restaurant/actions";
import {
  ADD_RESTAURANT,
  ADD_RESTAURANT_PHOTO,
  EDIT_RESTAURANT,
  GET_MENU,
  GET_RESTAURANTS,
  GET_RESTAURANT,
  GET_PRODUCTS,
} from "../redux/restaurant/constants";
import { setAppError } from "../redux/app/actions";
import { IResponse, IRestaurant } from "../utils/types";

function* addNewRestaurant(action: IAddRestaurantAction) {
  try {
    const res: IResponse = yield call(api.addRestaurant, action.payload);
    if (res.data) {
      yield put(setAddedRestaurant(res.data));
    }
  } catch (err) {
    //@ts-ignore
    yield put(setAppError(err.message));
  }
}

function* addRestaurantPhoto({ payload, callback }: IAddRestaurantPhotoAction) {
  try {
    const res: string = yield call(api.addRestaurantPhoto, payload);
    if (res) {
      if (payload.isNewRestaurant) {
        yield put(setCuisineTrigger(true));
      } else {
        yield put(setNewRestaurantPhoto(res));
        callback && callback();
      }
    }
  } catch (err) {
    //@ts-ignore
    yield put(setAppError(err.message));
  } finally {
  }
}

function* editRestaurant({ payload, callback }: IEditRestaurantAction) {
  try {
    yield put(setRestaurantLoading(true));
    const res: IResponse = yield call(api.editRestaurant, payload);
    if (res) {
      yield put(setAddedRestaurant(res.data));
      yield put(setRestaurant(res.data));
      callback();
    }
  } catch (err) {
    //@ts-ignore
    yield put(setAppError(err.message));
  } finally {
    yield put(setRestaurantLoading(false));
  }
}

function* getMyRestaurants() {
  try {
    const res: IResponse = yield call(api.getMyRestaurants);
    if (res.data) {
      yield put(setRestaurants(res.data.restaurants));
    }
  } catch (err) {
    //@ts-ignore
    yield put(setAppError(err.message));
  }
}

function* getRestaurant({ payload }: IGetRestaurantAction) {
  try {
    const res: IResponse<IRestaurant> = yield call(api.getRestaurant, payload);

    if (res.data) {
      yield put(setRestaurant(res.data));
      if (res.data.restaurantPlace?.placeId) {
        const googleRes: IRestaurant | null = yield call(
          api.getRestaurantInformation,
          res.data.restaurantPlace.placeId
        );
        if (googleRes) {
          yield put(setRestaurant({ ...res.data, googlePlace: googleRes }));
        }
      }
    }
  } catch (err) {
    //@ts-ignore
    yield put(setAppError(err?.message));
  }
}

function* getRestaurantMenu({ payload }: IGetMenuAction) {
  try {
    const res: IResponse = yield call(api.getMenu, payload);
    if (res.data) {
      yield put(setMenu(res.data));
      const productsRes: IResponse = yield call(
        api.getProduct,
        res.data.menuCategories[0].deliverectId
      );

      if (productsRes?.data?.products) {
        yield put(setProduct(productsRes.data.products));
      }
    }
  } catch (err) {
    //@ts-ignore
    yield put(setAppError(err?.message));
  }
}

function* getCategoryProducts({ payload }: IFetchProductActon) {
  try {
    yield put(setRestaurantLoading(true));
    const res: IResponse = yield call(api.getProduct, payload.trim());
    if (res?.data?.products) {
      yield put(setProduct(res.data.products));
    }
  } catch (err) {
    //@ts-ignore
    yield put(setAppError(err?.message));
  } finally {
    yield put(setRestaurantLoading(false));
  }
}

export function* restaurantSaga() {
  yield all([
    takeLatest(ADD_RESTAURANT, addNewRestaurant),
    takeLatest(ADD_RESTAURANT_PHOTO, addRestaurantPhoto),
    takeLatest(EDIT_RESTAURANT, editRestaurant),
    takeLatest(GET_RESTAURANT, getRestaurant),
    takeLatest(GET_RESTAURANTS, getMyRestaurants),
    takeLatest(GET_MENU, getRestaurantMenu),
    takeLatest(GET_PRODUCTS, getCategoryProducts),
  ]);
}
