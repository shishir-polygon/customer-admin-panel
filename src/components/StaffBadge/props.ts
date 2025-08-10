import { IWorker } from "../../utils/types";

export default interface IStaffBadgeProps {
  worker: IWorker;
  isGeneralManager?: boolean;
  onRemoveWorker: (id: string) => void;
}
