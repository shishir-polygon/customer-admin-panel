import { ICuisineState } from ".";
import { AppState } from "..";

export const cuisinesSelector = (state: AppState): ICuisineState =>
  state.cuisines;
