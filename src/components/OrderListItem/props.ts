import { IOrder } from "../../utils/types";

export default interface IOrderListItemProps {
  order: IOrder;
  index: number;
  checkedOrderId?: string;
  onCheckOrder: (order: IOrder, index: number) => void;
}
