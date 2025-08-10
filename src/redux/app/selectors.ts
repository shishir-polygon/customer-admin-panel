import { AppState } from "..";

export const appSelector = (state: AppState) => state.app;
export const isLoadingSelector = (state: AppState) => state.app.isLoading;
