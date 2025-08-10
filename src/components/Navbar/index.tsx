import { FC } from "react";
import { useLocation } from "react-router-dom";
import { CSSProperties } from "styled-components";

import { panelItems } from "./data";
import INavbarProps from "./props";
import { NavItem, ItemName, NavbarList, NavbarWrapper } from "./styles";
import { Img } from "..";
import { IMAGES } from "../../assets";
import { colors } from "../../utils/colors";
import { Routes } from "../../utils/constants";
import { ReactComponent as Home } from "../../assets/images/panel_home.svg";
import { ReactComponent as Menu } from "../../assets/images/panel_menu.svg";
import { ReactComponent as Staff } from "../../assets/images/panel_staff.svg";
import { ReactComponent as Orders } from "../../assets/images/panel_orders.svg";
import { ReactComponent as Settings } from "../../assets/images/panel_settings.svg";
import { ReactComponent as Analytics } from "../../assets/images/panel_analytics.svg";
import { ReactComponent as Notification } from "../../assets/images/panel_notification.svg";
import { ReactComponent as AllRestaurants } from "../../assets/images/all_restaurants.svg";
import { ReactComponent as PaymentsHistory } from "../../assets/images/panel_payments.svg";

export const Navbar: FC<INavbarProps> = () => {
  const location = useLocation().pathname;

  const renderIcon = (path: Routes) => {
    const iconFill = location === path ? colors.KILLARNEY : colors.BOULDER;
    const iconStyle: CSSProperties = {
      width: "20px",
      height: "20px",
      marginRight: "20px",
      transition: "all 0.2s linear",
    };

    switch (path) {
      case Routes.Home:
        return <Home fill={iconFill} style={iconStyle} />;
      case Routes.Menu:
        return <Menu fill={iconFill} style={iconStyle} />;
      case Routes.Staff:
        return <Staff fill={iconFill} style={iconStyle} />;
      case Routes.Analytics:
        return <Analytics fill={iconFill} style={iconStyle} />;
      case Routes.Notification:
        return <Notification fill={iconFill} style={iconStyle} />;
      case Routes.Orders:
        return <Orders fill={iconFill} style={iconStyle} />;
      case Routes.Payments:
        return <PaymentsHistory fill={iconFill} style={iconStyle} />;
      case Routes.AllRestaurants:
        return <AllRestaurants fill={iconFill} style={iconStyle} />;
      case Routes.Settings:
        return <Settings fill={iconFill} style={iconStyle} />;
      default:
        break;
    }
  };

  return (
    <NavbarWrapper>
      <NavbarList>
        <Img
          src={IMAGES.PANEL_LOGO}
          width={85}
          height={25}
          marginTop={21}
          marginBottom={42}
          marginLeft={20}
        />
        {panelItems.map(({ name, path }) => (
          <NavItem to={path} key={name}>
            {renderIcon(path)}
            <ItemName>{name}</ItemName>
          </NavItem>
        ))}
      </NavbarList>
    </NavbarWrapper>
  );
};
