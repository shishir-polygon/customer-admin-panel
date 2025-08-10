import { returnCuisineImg } from "../../helpers/img-helpers";
import { ICuisine } from "../../utils/types";
import { CuisinesActions } from "./actions";
import { SET_CUISINES } from "./constants";

export interface ICuisineState {
  cuisines: ICuisine[];
}

const INITIAL_STATE: ICuisineState = {
  cuisines: [],
};

export const cuisinesReducer = (
  state = INITIAL_STATE,
  action: CuisinesActions
): ICuisineState => {
  switch (action.type) {
    case SET_CUISINES:
      return {
        ...state,
        cuisines: action.payload.map((cuisine) => {
          const cisineImg = returnCuisineImg(cuisine.title);
          return { ...cuisine, img: cisineImg };
        }),
      };
    default:
      return state;
  }
};
