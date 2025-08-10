import { IWorker } from "../../utils/types";

export default interface IAddStaffProps {
  onSaveStaff: (newStaff: IWorker) => void;
}
