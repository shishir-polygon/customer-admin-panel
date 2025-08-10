import { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import IAllRestaurantsScreenProps from "./props";
import { AddRestaurant, RestaurantsList, Title, Wrapper } from "./styles";
import {
  Heading,
  Loader,
  RestaurantListItem,
  SmoothEffect,
} from "../../components";
import { Routes } from "../../utils/constants";
import { restaurantSelector } from "../../redux/restaurant/selectors";
import { getRestaurants } from "../../redux/restaurant/actions";

export const AllRestaurantsScreen: FC<IAllRestaurantsScreenProps> = () => {
  const { restaurants, loading } = useSelector(restaurantSelector);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const newRestaurant = () => history.push(Routes.AddRestaurant);

  return (
    <SmoothEffect>
      <Wrapper>
        <Heading
          bolder
          textAlign="left"
          marginBottom={69}
          marginTop={30}
          text="Welcome to Panda!"
        />
        <RestaurantsList>
          {loading && <Loader mini />}

          {restaurants.map((res, index) => (
            <RestaurantListItem key={res._id} restaurant={res} index={index} />
          ))}

          <AddRestaurant onClick={newRestaurant}>
            <Title>Add restaurant</Title>
          </AddRestaurant>
        </RestaurantsList>
      </Wrapper>
    </SmoothEffect>
  );
};
