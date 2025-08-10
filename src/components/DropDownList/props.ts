import { Position } from "../../utils/types";

export default interface IDropDownListProps {
  items: { text: string; value: Position }[];
  onCheckItem: (item: Position) => void;
}
