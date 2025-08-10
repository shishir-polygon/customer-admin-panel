import { NotificationPopUpType } from "../../utils/types";

export default interface IErrorNotificationProps {
  error?: string | null;
  type?: NotificationPopUpType;
  closeSuccessPopUp?: (text: null) => void;
}
