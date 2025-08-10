import { IMAGES } from "../../assets";
import { ISettings } from "../../utils/types";
import { SettingsCategory } from "../../utils/constants";

const { ManagerProfile, DeliverectID, Payments, ServiceCharge, Security } =
  SettingsCategory;

export const settings: ISettings[] = [
  { name: ManagerProfile, icon: IMAGES.GREEN_MANAGER, id: "1" },
  { name: DeliverectID, icon: IMAGES.DELIVERECT, id: "2" },
  { name: Payments, icon: IMAGES.panel.PAYMENTS, id: "3" },
  { name: ServiceCharge, icon: IMAGES.SERVICE_MANAGER, id: "4" },
  { name: Security, icon: IMAGES.SECURITY, id: "5" },
];
