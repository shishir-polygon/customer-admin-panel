import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import IAddNewRestaurantProps from "./props";
import { DescriptionBlock, Form, NameFieldWrapper, Wrapper } from "./styles";
import {
  AddCuisines,
  Button,
  Heading,
  Input,
  SmoothEffect,
  Textarea,
  UploadPhotoBlock,
} from "../../components";
import {
  addRestaurantPhoto,
  addRestaurant,
  clearAddedRestaurantInfo,
} from "../../redux/restaurant/actions";
import { IAddRestaurantForm } from "../../utils/types";
import { authSelector } from "../../redux/auth/selectors";
import { restaurantSelector } from "../../redux/restaurant/selectors";

export const AddRestaurantScreen: FC<IAddNewRestaurantProps> = () => {
  const [isCuisinesStep, setIsCuisinesStep] = useState(false);
  const [photo, setPhoto] = useState<File>();

  const { userData } = useSelector(authSelector);
  const { cuisinesTrigger, addedRestaurant } = useSelector(restaurantSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (photo && addedRestaurant?._id && !cuisinesTrigger) {
      dispatch(
        addRestaurantPhoto({
          restaurantId: addedRestaurant._id,
          isNewRestaurant: true,
          photo,
        })
      );
    }
  }, [photo, addedRestaurant, dispatch, cuisinesTrigger]);

  useEffect(() => {
    cuisinesTrigger && setIsCuisinesStep(true);
  }, [cuisinesTrigger]);

  useEffect(() => {
    return () => {
      dispatch(clearAddedRestaurantInfo());
    };
  }, [dispatch]);

  const {
    values: { name, about },
    handleChange,
    handleSubmit,
  } = useFormik<IAddRestaurantForm>({
    onSubmit: (values) => {
      if (userData?._id && photo) {
        dispatch(
          addRestaurant({
            ...values,
            open: "",
            close: "",
            googleLink: "",
            instagramLink: "",
            adminId: userData._id,
          })
        );
      }
    },
    initialValues: {
      name: "",
      about: "",
    },
  });

  return (
    <SmoothEffect>
      <Wrapper isCuisinesStep={isCuisinesStep}>
        {!isCuisinesStep ? (
          <>
            <Heading
              bolder
              marginTop={100}
              text="Add information about your restaurant"
            />
            <Form onSubmit={handleSubmit}>
              <NameFieldWrapper>
                <Input
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Name"
                  title="Add name of your restaurant"
                />
              </NameFieldWrapper>

              <DescriptionBlock>
                <UploadPhotoBlock setPhoto={setPhoto} />
                <Textarea
                  name="about"
                  value={about}
                  onChange={handleChange}
                  title="Add description of your restaurant"
                  placeholder="Description"
                  marginBottom={100}
                />
              </DescriptionBlock>
              <Button marginLeft={125} text="Next" type="submit" />
            </Form>
          </>
        ) : (
          <AddCuisines />
        )}
      </Wrapper>
    </SmoothEffect>
  );
};
