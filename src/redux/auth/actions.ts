import {
  ILogin,
  ISignUp,
  IUserData,
  IVerifyNumberResponse,
} from "../../utils/types";
import {
  SIGN_UP,
  SUCCESS_LOGIN,
  VERIFY,
  SUCCESS_VERIFY,
  LOGIN,
  REFRESH_TOKEN,
  SUCCESS_AUTHENTICATED,
  SET_USER_DATA,
  LOGOUT,
} from "./constants";

// ================ Types ================ //

export type AuthActions =
  | ISignUpAction
  | ISuccessSignUp
  | ISuccessVerify
  | ILoginAction
  | IAuthenticatedAction
  | ISetUserDataAction
  | ILogoutAction;

export interface ILoginAction {
  type: typeof LOGIN;
  payload: ILogin;
}

export interface ILogoutAction {
  type: typeof LOGOUT;
}
export interface ISignUpAction {
  type: typeof SIGN_UP;
  payload: ISignUp;
}

export interface ISuccessSignUp {
  type: typeof SUCCESS_LOGIN;
  payload: ILogin;
}

export interface IVerifyAction {
  type: typeof VERIFY;
  payload: IVerifyNumberResponse;
}

export interface ISuccessVerify {
  type: typeof SUCCESS_VERIFY;
}

export interface IRefreshTokenAction {
  type: typeof REFRESH_TOKEN;
}

export interface IAuthenticatedAction {
  type: typeof SUCCESS_AUTHENTICATED;
}

export interface ISetUserDataAction {
  type: typeof SET_USER_DATA;
  payload: IUserData | null;
}

// ================ Actions ================ //

export const signUp = (data: ISignUp): ISignUpAction => ({
  type: SIGN_UP,
  payload: data,
});

export const successLogin = (authData: ILogin): ISuccessSignUp => ({
  type: SUCCESS_LOGIN,
  payload: authData,
});

export const verifyNumber = (data: IVerifyNumberResponse): IVerifyAction => ({
  type: VERIFY,
  payload: data,
});

export const successVerify = (): ISuccessVerify => ({ type: SUCCESS_VERIFY });

export const login = (data: ILogin): ILoginAction => ({
  type: LOGIN,
  payload: data,
});

export const logout = (): ILogoutAction => ({ type: LOGOUT });

export const successAuthenticated = (): IAuthenticatedAction => ({
  type: SUCCESS_AUTHENTICATED,
});

export const refreshToken = (): IRefreshTokenAction => ({
  type: REFRESH_TOKEN,
});

export const setUserData = (
  userData: IUserData | null
): ISetUserDataAction => ({
  type: SET_USER_DATA,
  payload: userData,
});
