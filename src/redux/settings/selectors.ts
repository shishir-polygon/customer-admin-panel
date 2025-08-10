import { ISettingState } from ".";
import { AppState } from "..";

export const settingsSelector = (state: AppState): ISettingState =>
  state.settings;
export const serviceChargeSelector = (state: AppState) =>
  state.settings.serviceCharge;
