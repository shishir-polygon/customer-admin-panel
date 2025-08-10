import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import IAddCuisinesProps from "./props";
import { CuisinesList } from "./styles";
import { Button, CuisineBadge, Heading } from "..";
import { Routes } from "../../utils/constants";
import { IUpdRestaurant } from "../../utils/types";
import { getCuisines } from "../../redux/cuisine/actions";
import { editRestaurant } from "../../redux/restaurant/actions";
import { cuisinesSelector } from "../../redux/cuisine/selectors";
import { addedRestaurantSelector } from "../../redux/restaurant/selectors";

export const AddCuisines: FC<IAddCuisinesProps> = () => {
  const [checkedCuisines, setCheckedCuisines] = useState<string[]>([]);

  const { cuisines } = useSelector(cuisinesSelector);
  const addedRestaurant = useSelector(addedRestaurantSelector);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(getCuisines());
  }, [dispatch]);

  const isChecked = (cuisine_id: string) =>
    checkedCuisines.some((c) => c === cuisine_id);

  const onCheckCuisine = (cuisine_id: string) => {
    if (isChecked(cuisine_id)) {
      setCheckedCuisines((prevState) => [
        ...prevState.filter((c) => c !== cuisine_id),
      ]);
    } else {
      setCheckedCuisines((prevState) => [...prevState, cuisine_id]);
    }
  };

  const onChangeCuisines = () => {
    if (addedRestaurant) {
      const updRestaurant: IUpdRestaurant = {
        cuisines: checkedCuisines,
        _id: addedRestaurant._id,
      };
      const updRestaurantCallback = () => history.push(Routes.AllRestaurants);

      dispatch(editRestaurant(updRestaurant, updRestaurantCallback));
    }
  };

  return (
    <>
      <Heading marginBottom={100} text="Add your restaurant’s cuisines" />
      <CuisinesList>
        {cuisines.map((cuisine, index) => (
          <CuisineBadge
            key={cuisine._id}
            cuisine={cuisine}
            index={index}
            isChecked={isChecked}
            onCheckCuisine={onCheckCuisine}
          />
        ))}
      </CuisinesList>
      <Button text="Next" onClick={onChangeCuisines} />
    </>
  );
};
