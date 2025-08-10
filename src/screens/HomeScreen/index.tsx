import { ChangeEvent, FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import IAdminPanelProps from "./props";
import { ContentWrapper, SearchBlock, Wrapper, HiddenMap } from "./styles";
import {
  AboutRestaurant,
  Heading,
  Input,
  Loader,
  RestaurantInfo,
  SmoothEffect,
  Warning,
} from "../../components";
import {
  clearCurrentRestaurant,
  getRestaurant,
} from "../../redux/restaurant/actions";
import { LocalStorage, Routes } from "../../utils/constants";
import { restaurantSelector } from "../../redux/restaurant/selectors";
import { cuisinesSelector } from "../../redux/cuisine/selectors";
import { getCuisines } from "../../redux/cuisine/actions";

export const HomeScreen: FC<IAdminPanelProps> = () => {
  const [search, setSearch] = useState("");
  // const [showInfo, setShowInfo] = useState(false);

  const { currentRestaurant, loading } = useSelector(restaurantSelector);
  const { cuisines } = useSelector(cuisinesSelector);
  const dispatch = useDispatch();

  const history = useHistory();

  const id = localStorage.getItem(LocalStorage.RestaurantID);

  useEffect(() => {
    if (id) {
      // const infoTrigger = () => setShowInfo(true);
      const infoTriggerCallback = () => {};
      dispatch(getRestaurant(id));
      dispatch(getCuisines(infoTriggerCallback));
    }

    return () => {
      currentRestaurant && dispatch(clearCurrentRestaurant());
    };
  }, [id, dispatch]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.currentTarget.value);

  if (!currentRestaurant && !id) history.push(Routes.AllRestaurants);

  return (
    <SmoothEffect>
      <Wrapper>
        {loading && <Loader mini />}

        <SearchBlock>
          <Heading
            bolder
            width="290px"
            textAlign="left"
            marginBottom={20}
            text={currentRestaurant?.name}
          />
          <Input
            value={search}
            onChange={onChangeHandler}
            marginBottom={0}
            width="380px"
            isSearch
          />

          <Warning
            text="Please note you have not filled in your credit card details"
            marginLeft={15}
          />
        </SearchBlock>

        <ContentWrapper>
          {currentRestaurant && cuisines.length && (
            <>
              <AboutRestaurant currentRestaurant={currentRestaurant} />
              <RestaurantInfo currentRestaurant={currentRestaurant} />
            </>
          )}

          <HiddenMap id="map" />
        </ContentWrapper>
      </Wrapper>
    </SmoothEffect>
  );
};
