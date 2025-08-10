import { IAuthState } from ".";
import { AppState } from "..";

export const authSelector = (state: AppState): IAuthState => state.auth;
