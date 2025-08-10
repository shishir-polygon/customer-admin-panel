import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import IRestaurantInfoProps from "./props";
import {
  AddButton,
  Cost,
  CostWrapper,
  Cuisine,
  CuisinesCheckList,
  CuisinesList,
  DeleteButton,
  EditWrapper,
  Hours,
  Info,
  InfoBlock,
  InfoTitle,
  Rating,
  RatingBlock,
  ReviewsCount,
  StarsWrapper,
} from "./styles";
import { Button, GooglePlaces, Img, Input, Modal } from "..";
import { IMAGES } from "../../assets";
import { colors } from "../../utils/colors";
import { ICuisine } from "../../utils/types";
import { editRestaurant } from "../../redux/restaurant/actions";
import { cuisinesSelector } from "../../redux/cuisine/selectors";

export const RestaurantInfo: FC<IRestaurantInfoProps> = ({
  currentRestaurant,
}) => {
  const [placeId, setPlaceId] = useState(
    currentRestaurant.restaurantPlace?.placeId
  );
  const [showBigMap, setShowBigMap] = useState(false);
  const [isEditInfo, setIsEditInfo] = useState(false);
  const [isEditCuisines, setIsEditCuisines] = useState(false);
  const [cuisines, setCuisines] = useState<ICuisine[]>([]);
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>(
    currentRestaurant.cuisines
  );

  const { cuisines: allCuisines } = useSelector(cuisinesSelector);
  const dispatch = useDispatch();

  const { instagramLink, googleLink, restaurantPlace, googlePlace } =
    currentRestaurant;

  // from the server I only get the cuisine id.
  // on another endpoint I get cuisines and iterate over id
  useEffect(() => {
    const restaurantCuisines: ICuisine[] = [];
    selectedCuisines.forEach((cuisineId) => {
      const cuisine = allCuisines.find((c) => {
        return c._id === cuisineId;
      });

      if (cuisine) {
        restaurantCuisines.push(cuisine);
      }
    });
    setCuisines(restaurantCuisines);
  }, [selectedCuisines, allCuisines]);

  const {
    values: { restaurantInstagram, open, close },
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    onSubmit: () => {
      dispatch(
        editRestaurant(
          {
            _id: currentRestaurant._id,
            instagramLink: restaurantInstagram,
            cuisines: selectedCuisines,
            open,
            close,
            googlePlaceId: placeId,
          },
          editModeHandler
        )
      );
    },
    initialValues: {
      restaurantInstagram: currentRestaurant.instagramLink,
      restaurantAddress: currentRestaurant.googleLink,
      open: currentRestaurant.open,
      close: currentRestaurant.close,
    },
  });

  useEffect(() => {
    setFieldValue("restaurantInstagram", currentRestaurant.instagramLink);
    setFieldValue("restaurantAddress", currentRestaurant.googleLink);
    setFieldValue("open", currentRestaurant.open);
    setFieldValue("close", currentRestaurant.close);
  }, [currentRestaurant, setFieldValue]);

  // mock
  const hours = {
    weekdays: currentRestaurant.close,
    weekends: currentRestaurant.open,
  };

  const mapHandler = () => setShowBigMap(true);

  const renderGrade = (rating?: boolean) => {
    const count: string[] = [];
    let max: number = 0;
    if (restaurantPlace?.rating || restaurantPlace?.priceLevel) {
      if (rating) {
        max = Math.round(restaurantPlace.rating);
      } else {
        max = Math.round(restaurantPlace.priceLevel);
      }
    }

    if (!max) return;

    for (let i = 0; i < max; i++) {
      count.push("grade-" + i);
    }

    return (
      <>
        {count.map((grade) =>
          rating ? (
            <Img key={grade} src={IMAGES.START} width={15} />
          ) : (
            <Cost key={grade}>$</Cost>
          )
        )}
      </>
    );
  };

  const editModeHandler = () => {
    setIsEditInfo((prevState) => !prevState);
    setIsEditCuisines(false);
  };

  const deleteCuisineHandler = (cousineId: string) =>
    setSelectedCuisines([...selectedCuisines.filter((id) => id !== cousineId)]);

  const editCuisinesHandler = () =>
    setIsEditCuisines((prevState) => !prevState);

  const checkedCuisinesHandler = (cuisineId: string) => {
    if (selectedCuisines.some((id) => id === cuisineId)) {
      setSelectedCuisines([
        ...selectedCuisines.filter((id) => id !== cuisineId),
      ]);
    } else {
      setSelectedCuisines([...selectedCuisines, cuisineId]);
    }
  };

  const closeModalHandler = () => setShowBigMap(false);

  return (
    <>
      <Modal
        isMapsModal
        height={700}
        showModal={showBigMap}
        onCloseModal={closeModalHandler}
      >
        {isEditInfo ? (
          <GooglePlaces setPlaceId={setPlaceId} />
        ) : (
          <GooglePlaces
            setPlaceId={setPlaceId}
            coordinates={{
              lat: restaurantPlace?.position.coordinates[1],
              lng: restaurantPlace?.position.coordinates[0],
            }}
          />
        )}

        {isEditInfo && (
          <Button onClick={closeModalHandler} text="Accept" marginTop={20} />
        )}
      </Modal>

      <Info isEditMode={isEditInfo}>
        <InfoBlock>
          <EditWrapper>
            <InfoTitle bolder marginTop={0} icon={IMAGES.CLOCK}>
              Opening hours
            </InfoTitle>
            <Img
              onClick={editModeHandler}
              cursor="pointer"
              src={IMAGES.EDIT}
              width={16}
            />
          </EditWrapper>

          <Hours>
            Mon-Fri&emsp;
            {isEditInfo ? (
              <Input
                name="open"
                value={open}
                onChange={handleChange}
                height={25}
                borderRadius={5}
                width="200px"
                marginTop={25}
              />
            ) : (
              hours.weekdays
            )}
          </Hours>
          <Hours>
            Sat-Sun&emsp;
            {isEditInfo ? (
              <Input
                name="close"
                value={close}
                onChange={handleChange}
                height={25}
                borderRadius={5}
                width="200px"
                marginTop={35}
              />
            ) : (
              hours.weekends
            )}
          </Hours>
        </InfoBlock>

        <InfoBlock>
          <EditWrapper>
            <InfoTitle bolder icon={IMAGES.CHEF_HAT}>
              Cuisines
            </InfoTitle>

            {isEditInfo && <AddButton onClick={editCuisinesHandler} />}

            {isEditInfo && isEditCuisines && (
              <CuisinesCheckList>
                {allCuisines.map(({ _id, title }) => (
                  <Cuisine
                    key={_id}
                    isCheckMode
                    onClick={() => checkedCuisinesHandler(_id)}
                    isWhite={selectedCuisines.some(
                      (cuisine) => _id === cuisine
                    )}
                  >
                    {title}
                  </Cuisine>
                ))}
              </CuisinesCheckList>
            )}
          </EditWrapper>

          <CuisinesList>
            {cuisines.map(({ _id, title }) => (
              <Cuisine key={_id} isEditMode={isEditInfo}>
                {title}
                {isEditInfo && (
                  <DeleteButton onClick={() => deleteCuisineHandler(_id)} />
                )}
              </Cuisine>
            ))}
          </CuisinesList>
        </InfoBlock>

        <InfoBlock>
          {(instagramLink || isEditInfo) && (
            <InfoTitle
              bolder
              bolderLink
              iconWidth={24}
              iconHeight={24}
              marginBottom={0}
              icon={IMAGES.INSTAGRAM}
              color={colors.MARINER}
            >
              {!isEditInfo && instagramLink}
            </InfoTitle>
          )}

          {isEditInfo && (
            <Input
              name="restaurantInstagram"
              value={restaurantInstagram}
              onChange={handleChange}
              height={30}
              borderRadius={5}
              marginBottom={0}
              marginLeft={30}
              paddingLeft={5}
            />
          )}
        </InfoBlock>

        <InfoBlock borderBottom={false}>
          <InfoBlock>
            {(googleLink || isEditInfo) && (
              <InfoTitle
                imgLeft={5}
                fontWeight="normal"
                color={colors.MARINER_LIGHT}
                icon={IMAGES.MAP_POINT}
                marginBottom={0}
                iconWidth={16}
                iconHeight={24}
              >
                {!isEditInfo && restaurantPlace?.address}
              </InfoTitle>
            )}
          </InfoBlock>

          <Img
            onClick={mapHandler}
            cursor="pointer"
            width="100%"
            src={IMAGES.MOCK_COORDINATES}
          />

          {(restaurantPlace?.rating ||
            restaurantPlace?.priceLevel ||
            googlePlace?.user_ratings_total) && (
            <RatingBlock>
              <Rating>{restaurantPlace?.rating}</Rating>
              {restaurantPlace?.rating && (
                <StarsWrapper>{renderGrade(true)}</StarsWrapper>
              )}
              {restaurantPlace?.priceLevel && (
                <CostWrapper>{renderGrade()}</CostWrapper>
              )}
              {googlePlace?.user_ratings_total && (
                <ReviewsCount>{`${googlePlace?.user_ratings_total} Google reviews`}</ReviewsCount>
              )}
            </RatingBlock>
          )}
        </InfoBlock>

        {isEditInfo && (
          <Button onClick={handleSubmit} center text="Save" type="submit" />
        )}
      </Info>
    </>
  );
};
