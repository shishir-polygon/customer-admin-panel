import { SettingActions } from "./actions";
import {
  SET_DELIVERECT_SETTINGS,
  SET_MAIN_SERVICE_CHARGE,
  SET_PAYMENTS_SETTING,
  SET_PICK_UP_SERVICE_CHARGE,
  SET_SETTINGS_FETCHING,
  SET_STRIPE_STATUS,
} from "./constants";
import { IPaymentSetting, IServiceCharge } from "../../utils/types";

export interface ISettingState {
  serviceCharge: {
    mainServiceCharge: IServiceCharge;
    pickupServiceCharge: IServiceCharge;
  };
  managerProfile: {
    email: string;
  };
  deliverect: {
    deliverectId: string;
  };
  payments: IPaymentSetting;
  fetching: boolean;
}

const INIT_STATE: ISettingState = {
  serviceCharge: {
    mainServiceCharge: {
      isPercent: true,
      charge: "5",
    },
    pickupServiceCharge: {
      isPercent: false,
      charge: "0",
    },
  },
  managerProfile: {
    email: "example@example.com",
  },
  deliverect: {
    deliverectId: "345m43534532e21e",
  },
  payments: {
    payPall: "https://www.paypal.com/en/home",
    tipsPayPall: "https://www.paypal.com/en/home",
    withStripe: false,
  },
  fetching: false,
};

export const settingsReducer = (
  state: ISettingState = INIT_STATE,
  action: SettingActions
): ISettingState => {
  switch (action.type) {
    case SET_MAIN_SERVICE_CHARGE:
      return {
        ...state,
        serviceCharge: {
          ...state.serviceCharge,
          mainServiceCharge: action.payload,
        },
      };
    case SET_PICK_UP_SERVICE_CHARGE:
      return {
        ...state,
        serviceCharge: {
          ...state.serviceCharge,
          pickupServiceCharge: action.payload,
        },
      };
    case SET_DELIVERECT_SETTINGS:
      return {
        ...state,
        deliverect: { ...state.deliverect, deliverectId: action.payload },
      };
    case SET_PAYMENTS_SETTING:
      return { ...state, payments: action.payload };
    case SET_SETTINGS_FETCHING:
      return { ...state, fetching: action.payload };
    case SET_STRIPE_STATUS:
      return {
        ...state,
        payments: { ...state.payments, withStripe: action.payload },
      };
    default:
      return state;
  }
};
