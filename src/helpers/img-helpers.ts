import { IMAGES } from "../assets";
import { Cuisines } from "../utils/constants";

const {
  INDIAN,
  ITALIAN,
  CHINESE,
  SPANISH,
  FRENCH,
  LEBANESE,
  BRITISH,
  JAPANESE,
  MEXICAN,
  TURKISH,
  THAI,
  PUB_FOOD,
  AMERICAN,
  CHICKEN,
  PIZZA,
  BURGER,
} = IMAGES.foodType;

const cuisinesIcons: Record<Cuisines, string> = {
  Indian: INDIAN,
  Italian: ITALIAN,
  Chinese: CHINESE,
  Spanish: SPANISH,
  French: FRENCH,
  Lebanese: LEBANESE,
  British: BRITISH,
  Japanese: JAPANESE,
  Mexican: MEXICAN,
  Turkish: TURKISH,
  Thai: THAI,
  "Pub Food": PUB_FOOD,
  American: AMERICAN,
  Chicken: CHICKEN,
  Pizza: PIZZA,
  Burgers: BURGER,
};

export const returnCuisineImg = (title: Cuisines) => cuisinesIcons[title];
