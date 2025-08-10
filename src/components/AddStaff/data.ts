import { Position } from "../../utils/types";

interface IPositions {
  text: string;
  value: Position;
}

export const positions: IPositions[] = [
  { text: "Manager", value: Position.Managers },
  { text: "Senior waiter", value: Position.SeniorWaiter },
  { text: "Waiter", value: Position.Waiter },
];
