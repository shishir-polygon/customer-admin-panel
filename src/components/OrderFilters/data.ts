import { OrderStatusType } from "../../utils/types";

interface IActiveListProps {
  value: OrderStatusType;
}

export const activeList: IActiveListProps[] = [
  { value: OrderStatusType.Open },
  { value: OrderStatusType.Pending },
  { value: OrderStatusType.Closed },
  { value: OrderStatusType.Failed },
];
