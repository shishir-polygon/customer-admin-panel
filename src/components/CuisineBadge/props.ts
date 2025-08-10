import { ICuisine } from "../../utils/types";

export default interface ICuisineBadgeProps {
  cuisine: ICuisine;
  index: number;
  isChecked: (id: string) => boolean;
  onCheckCuisine: (id: string) => void;
}
