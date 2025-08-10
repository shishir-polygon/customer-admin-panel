import {
  SET_DELIVERECT_SETTINGS,
  SET_MAIN_SERVICE_CHARGE,
  CHANGE_EMAIL,
  SET_PAYMENTS_SETTING,
  SET_PICK_UP_SERVICE_CHARGE,
  SET_SETTINGS_FETCHING,
  CHANGE_PASSWORD,
  CONNECTED_STRIPE,
  SET_STRIPE_STATUS,
} from "./constants";
import {
  IChangePassword,
  IPaymentSetting,
  IServiceCharge,
} from "../../utils/types";

// ========= Types ========= //

export type SettingActions =
  | ISetMainServiceChargeAction
  | ISetPickupServiceChargeAction
  | ISetDeliverectSettingsAction
  | ISetPaymentsSettingsAction
  | ISetSettingsFetchingAction
  | IChangePasswordAction
  | IChangeEmailAction
  | IConnectedStripeAction
  | ISetStripeStatusAction;

export interface ISetMainServiceChargeAction {
  type: typeof SET_MAIN_SERVICE_CHARGE;
  payload: IServiceCharge;
}

export interface ISetPickupServiceChargeAction {
  type: typeof SET_PICK_UP_SERVICE_CHARGE;
  payload: IServiceCharge;
}

export interface IChangeEmailAction {
  type: typeof CHANGE_EMAIL;
  payload: {
    email: string;
    userId: string;
  };
}

export interface ISetDeliverectSettingsAction {
  type: typeof SET_DELIVERECT_SETTINGS;
  payload: string;
}

export interface ISetPaymentsSettingsAction {
  type: typeof SET_PAYMENTS_SETTING;
  payload: IPaymentSetting;
}

export interface ISetSettingsFetchingAction {
  type: typeof SET_SETTINGS_FETCHING;
  payload: boolean;
}

export interface IChangePasswordAction {
  type: typeof CHANGE_PASSWORD;
  payload: { userId: string } & IChangePassword;
  callback: () => void;
}

export interface IConnectedStripeAction {
  type: typeof CONNECTED_STRIPE;
  payload: string;
  callback: (stripeLink: string) => void;
}

export interface ISetStripeStatusAction {
  type: typeof SET_STRIPE_STATUS;
  payload: boolean;
}

// ========== Actions ========= //

export const setMainServiceCharge = (
  serviceCharge: IServiceCharge
): ISetMainServiceChargeAction => ({
  type: SET_MAIN_SERVICE_CHARGE,
  payload: serviceCharge,
});

export const setPickUpServiceCharge = (
  serviceCharge: IServiceCharge
): ISetPickupServiceChargeAction => ({
  type: SET_PICK_UP_SERVICE_CHARGE,
  payload: serviceCharge,
});

export const setManagerSettings = (
  email: string,
  userId: string
): IChangeEmailAction => ({
  type: CHANGE_EMAIL,
  payload: { email, userId },
});

export const setDeliverecSettings = (
  deliverectId: string
): ISetDeliverectSettingsAction => ({
  type: SET_DELIVERECT_SETTINGS,
  payload: deliverectId,
});

export const setPaymentsSettings = (
  payload: IPaymentSetting
): ISetPaymentsSettingsAction => ({ type: SET_PAYMENTS_SETTING, payload });

export const setSettingsFetching = (
  isFetch: boolean
): ISetSettingsFetchingAction => ({
  type: SET_SETTINGS_FETCHING,
  payload: isFetch,
});

export const changePassword = (
  userId: string,
  userPasswords: IChangePassword,
  callback: () => void
): IChangePasswordAction => ({
  type: CHANGE_PASSWORD,
  payload: { userId, ...userPasswords },
  callback,
});

export const connectedStripe = (
  restaurantId: string,
  callback: (stripeLink: string) => void
): IConnectedStripeAction => ({
  type: CONNECTED_STRIPE,
  payload: restaurantId,
  callback,
});

export const setStripeStatus = (
  withStripe: boolean
): ISetStripeStatusAction => ({ type: SET_STRIPE_STATUS, payload: withStripe });
