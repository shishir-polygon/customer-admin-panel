import { SettingsCategory } from "../../utils/constants";

export default interface ISettingsNavbarProps {
  onSelectingSetting: (type: SettingsCategory) => void;
  selectedSetting: SettingsCategory;
}
