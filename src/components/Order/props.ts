import { IOrder } from "../../utils/types";

export default interface IOrderProps {
  order: IOrder | null;
  // tempo type fakeOrderTableNumber
  fakeOrderTableNumber: number;
}
