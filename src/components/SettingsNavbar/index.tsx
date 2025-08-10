import { FC } from "react";
import { CSSProperties } from "styled-components";

import { settings } from "./data";
import { NavbarWrapper, NavItem } from "./styles";
import ISettingsNavbarProps from "./props";
import { colors } from "../../utils/colors";
import { SettingsCategory } from "../../utils/constants";
import { ReactComponent as SecurityIcon } from "../../assets/images/security.svg";
import { ReactComponent as DeliverectIcon } from "../../assets/images/deliverect.svg";
import { ReactComponent as ManagerIcon } from "../../assets/images/service_manager.svg";
import { ReactComponent as PaymentsIcon } from "../../assets/images/setting_payments.svg";
import { ReactComponent as ServiceChargeIcon } from "../../assets/images/service_manager.svg";

export const SettingsNavbar: FC<ISettingsNavbarProps> = ({
  onSelectingSetting,
  selectedSetting,
}) => {
  const iconStyle: CSSProperties = {
    position: "absolute",
    width: "16px",
    height: "16px",
    left: "10px",
    top: "15px",
  };

  const renderIcon = (name: SettingsCategory) => {
    const iconFill =
      name === selectedSetting ? colors.KILLARNEY : colors.MANATEE;

    switch (name) {
      case SettingsCategory.ManagerProfile:
        return <ManagerIcon style={iconStyle} fill={iconFill} />;
      case SettingsCategory.DeliverectID:
        return <DeliverectIcon style={iconStyle} fill={iconFill} />;
      case SettingsCategory.Payments:
        return <PaymentsIcon style={iconStyle} fill={iconFill} />;
      case SettingsCategory.ServiceCharge:
        return <ServiceChargeIcon style={iconStyle} fill={iconFill} />;
      case SettingsCategory.Security:
        return <SecurityIcon style={iconStyle} fill={iconFill} />;
      default:
        break;
    }
  };

  return (
    <NavbarWrapper>
      {settings.map(({ id, name }) => (
        <NavItem
          key={id}
          checked={name === selectedSetting}
          onClick={() => onSelectingSetting(name)}
        >
          {name}
          {renderIcon(name)}
        </NavItem>
      ))}
    </NavbarWrapper>
  );
};
