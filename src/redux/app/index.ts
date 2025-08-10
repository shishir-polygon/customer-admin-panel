import { AppActionTypes } from "./actions";
import { SET_APP_ERROR, SET_LOADING, SET_SHOW_MODAL } from "./constants";

export interface IAppState {
  error: string | null;
  showModal: boolean;
  isLoading: boolean;
}

const INITIAL_STATE: IAppState = {
  error: null,
  showModal: false,
  isLoading: true,
};

export const appReducer = (
  state: IAppState = INITIAL_STATE,
  action: AppActionTypes
): IAppState => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_SHOW_MODAL:
      return { ...state, showModal: action.payload };
    case SET_APP_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
