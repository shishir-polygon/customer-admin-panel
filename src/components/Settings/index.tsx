import { FC, useState } from "react";
import { useSelector } from "react-redux";

import ISettingsProps from "./props";
import { SelectedSetting, SettingsWrapper } from "./styles";
import {
  DeliverectSetting,
  Loader,
  PaymentsSetting,
  ProfileSetting,
  SecuritySetting,
  ServiceChargeSetting,
  SettingsNavbar,
} from "..";
import { SettingsCategory as SettingNavbar } from "../../utils/constants";
import { settingsSelector } from "../../redux/settings/selectors";

export const Settings: FC<ISettingsProps> = () => {
  const [selectedSetting, setSelectedSetting] = useState<SettingNavbar>(
    SettingNavbar.ManagerProfile
  );

  const renderSetting = () => {
    switch (selectedSetting) {
      case SettingNavbar.ManagerProfile:
        return <ProfileSetting />;
      case SettingNavbar.DeliverectID:
        return <DeliverectSetting />;
      case SettingNavbar.Payments:
        return <PaymentsSetting />;
      case SettingNavbar.ServiceCharge:
        return <ServiceChargeSetting />;
      case SettingNavbar.Security:
        return <SecuritySetting />;
      default:
        break;
    }
  };

  const { fetching } = useSelector(settingsSelector);

  return (
    <SettingsWrapper>
      <SettingsNavbar
        selectedSetting={selectedSetting}
        onSelectingSetting={setSelectedSetting}
      />
      <SelectedSetting>
        {fetching && <Loader mini />}
        {renderSetting()}
      </SelectedSetting>
    </SettingsWrapper>
  );
};
