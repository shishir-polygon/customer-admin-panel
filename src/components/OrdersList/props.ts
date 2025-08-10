import { IOrder } from "../../utils/types";

export default interface IOrdersListProps {
  onCheckOrder: (order: IOrder, table: number) => void;
  checkedOrderId?: string;
}
