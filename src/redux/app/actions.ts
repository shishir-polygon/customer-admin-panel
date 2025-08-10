import { SET_APP_ERROR, SET_LOADING, SET_SHOW_MODAL } from "./constants";

// ========= Types ========= //

export type AppActionTypes =
  | ISetFetchingStatusAction
  | IShowModalAction
  | ISetErrorAction;

export interface ISetFetchingStatusAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface IShowModalAction {
  type: typeof SET_SHOW_MODAL;
  payload: boolean;
}

export interface ISetErrorAction {
  type: typeof SET_APP_ERROR;
  payload: string | null;
}

// ========= Actions ========= //

export const setFetchingStatus = (
  isLoading: boolean
): ISetFetchingStatusAction => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const showModal = (isShowModal: boolean): IShowModalAction => ({
  type: SET_SHOW_MODAL,
  payload: isShowModal,
});

export const setAppError = (error: string | null): ISetErrorAction => ({
  type: SET_APP_ERROR,
  payload: error,
});
