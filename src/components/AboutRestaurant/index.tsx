import { FC, ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import IAboutRestaurantProps from "./props";
import { About, AboutText, EditAboutText, EditWrapper } from "./styles";
import { Button, Img, Title, Modal, AddRestaurantPhoto } from "..";
import { IMAGES } from "../../assets";
import { editRestaurant } from "../../redux/restaurant/actions";
import { PHOTO_URL } from "../../utils/constants";

export const AboutRestaurant: FC<IAboutRestaurantProps> = ({
  currentRestaurant: { about, _id, photos },
}) => {
  const [isEditText, setIsEditText] = useState(false);
  const [aboutText, setAboutText] = useState(about);
  const [isShowModal, setIsShowModal] = useState(false);

  const dispatch = useDispatch();

  const editModeHandler = () => setIsEditText((prevState) => !prevState);
  const onEditPhoto = () => setIsShowModal(true);
  const closeModal = () => setIsShowModal(false);
  const onChangeAboutText = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setAboutText(e.currentTarget.value);
  const onEditAbout = () => {
    dispatch(
      editRestaurant(
        {
          _id,
          about: aboutText,
        },
        editModeHandler
      )
    );
  };

  return (
    <About>
      <Modal onCloseModal={closeModal} showModal={isShowModal}>
        <AddRestaurantPhoto closeModal={closeModal} />
      </Modal>

      <Img
        cursor="pointer"
        onClick={onEditPhoto}
        width={290}
        src={
          photos.length
            ? PHOTO_URL + photos[photos.length - 1]
            : IMAGES.MOCK_RESTAURANT
        }
      />

      <EditWrapper>
        <Title text="About" />
        <Img
          onClick={editModeHandler}
          cursor="pointer"
          src={IMAGES.EDIT}
          width={16}
          marginTop={15}
        />
      </EditWrapper>

      {!isEditText ? (
        <AboutText>{about}</AboutText>
      ) : (
        <EditAboutText value={aboutText} onChange={onChangeAboutText} />
      )}

      {isEditText && <Button center onClick={onEditAbout} text="Save" />}
    </About>
  );
};
