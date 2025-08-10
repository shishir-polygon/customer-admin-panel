import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import IMenuScreenProps from "./props";
import { Content, Wrapper } from "./styles";
import { IMenuCategory } from "../../utils/types";
import { Heading, Menu, MenuFilter, SmoothEffect } from "../../components";
import { restaurantSelector } from "../../redux/restaurant/selectors";
import { fetchProducts, getMenu } from "../../redux/restaurant/actions";

export const MenuScreen: FC<IMenuScreenProps> = () => {
  const { currentRestaurant, restaurantMenu } = useSelector(restaurantSelector);
  const dispatch = useDispatch();

  const [checkedItem, setCheckedItem] = useState<string>(
    restaurantMenu?.menuCategories[0]?.name
  );

  useEffect(() => {
    restaurantMenu?.menuCategories[0]?.name &&
      setCheckedItem(restaurantMenu?.menuCategories[0]?.name);
  }, [restaurantMenu.menuCategories]);

  useEffect(() => {
    // currentRestaurant?._id && dispatch(getMenu(currentRestaurant?._id));

    // hard-code restaurant ID
    dispatch(getMenu("6149fb393625ac6d05f41828"));
  }, [currentRestaurant, dispatch]);

  const onChoosingItem = (item: IMenuCategory) => {
    setCheckedItem(item.name);
    dispatch(fetchProducts(item.deliverectId));
  };

  return (
    <SmoothEffect>
      <Wrapper>
        <Heading
          bolder
          text="Menu"
          width="50%"
          fontSize={54}
          textAlign="left"
          marginBottom={20}
        />
        <Content>
          <MenuFilter
            category={restaurantMenu.menuCategories}
            setActiveType={onChoosingItem}
            checkedItem={checkedItem}
          />
          <Menu />
        </Content>
      </Wrapper>
    </SmoothEffect>
  );
};
