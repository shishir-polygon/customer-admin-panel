import { AuthActions } from "./actions";
import {
  LOGOUT,
  SET_USER_DATA,
  SUCCESS_AUTHENTICATED,
  SUCCESS_LOGIN,
  SUCCESS_VERIFY,
} from "./constants";
import { ILogin, IUserData } from "../../utils/types";

export interface IAuthState {
  authData: ILogin;
  isAuth: boolean;
  userData: IUserData | null;
  isVerifyStep: boolean;
}

const INITIAL_STATE: IAuthState = {
  isAuth: false,
  userData: null,
  isVerifyStep: false,
  authData: {
    password: "",
    phoneNumber: "",
  },
};

export const authReducer = (
  state: IAuthState = INITIAL_STATE,
  action: AuthActions
): IAuthState => {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return { ...state, authData: action.payload, isVerifyStep: true };
    case SUCCESS_VERIFY:
    case SUCCESS_AUTHENTICATED:
      return { ...state, isAuth: true };
    case SET_USER_DATA:
      return { ...state, userData: action.payload };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
