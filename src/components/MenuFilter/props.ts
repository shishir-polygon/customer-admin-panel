import { IMenuCategory, MenuType } from "../../utils/types";

export default interface IMenuFilterProps {
  category: IMenuCategory[];
  checkedItem: string;
  setActiveType: (category: IMenuCategory) => void;
}
