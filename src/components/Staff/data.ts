import { IWorker, Position } from "../../utils/types";

const { GeneralManager, Managers, SeniorWaiter, Waiter } = Position;

export interface IMockStaff {
  generalManager: IWorker[];
  managers: IWorker[];
  seniorWaiter: IWorker[];
  waiters: IWorker[];
}

export const mockStaff: IMockStaff = {
  generalManager: [
    {
      name: "Jane Smith",
      started: "05/07/21",
      id: "1",
      position: GeneralManager,
    },
  ],
  managers: [
    { name: "Jane Smith", started: "05/07/21", id: "2", position: Managers },
    { name: "Jane Smith", started: "05/07/21", id: "3", position: Managers },
  ],
  seniorWaiter: [
    {
      name: "Jane Smith",
      started: "05/07/21",
      id: "4",
      position: SeniorWaiter,
    },
  ],
  waiters: [
    { name: "Jane Smith", started: "05/07/21", id: "5", position: Waiter },
    { name: "Jane Smith", started: "05/07/21", id: "6", position: Waiter },
    { name: "Jane Smith", started: "05/07/21", id: "7", position: Waiter },
    { name: "Jane Smith", started: "05/07/21", id: "8", position: Waiter },
    { name: "Jane Smith", started: "05/07/21", id: "9", position: Waiter },
    { name: "Jane Smith", started: "05/07/21", id: "10", position: Waiter },
  ],
};
