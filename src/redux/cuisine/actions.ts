import { ICuisine } from "../../utils/types";
import { GET_ALL_CUISINES, SET_CUISINES } from "./constants";

// ========= Types ========= //
export type CuisinesActions = IGetCuisinesAction | ISetCuisinesActions;
export interface IGetCuisinesAction {
  type: typeof GET_ALL_CUISINES;
  callback?: () => void;
}

export interface ISetCuisinesActions {
  type: typeof SET_CUISINES;
  payload: ICuisine[];
}

// ========= Actions ========= //
export const getCuisines = (callback?: () => void): IGetCuisinesAction => ({
  type: GET_ALL_CUISINES,
  callback,
});

export const setCuisines = (cuisines: ICuisine[]): ISetCuisinesActions => ({
  type: SET_CUISINES,
  payload: cuisines,
});
