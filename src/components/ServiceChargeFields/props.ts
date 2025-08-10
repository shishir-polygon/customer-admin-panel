import { IServiceCharge } from "../../utils/types";

export default interface IServiceChargeFieldsProps {
  serviceCharge: IServiceCharge;
  onSave: (payload: IServiceCharge) => void;
}
