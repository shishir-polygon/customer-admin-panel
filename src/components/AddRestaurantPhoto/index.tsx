import { ChangeEvent, FC, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import IAddRestaurantPhotoProps from "./props";
import {
  AddPhotoWrapper,
  GalleryPhotos,
  PhotoBlock,
  PhotoPreview,
  UploadPhoto,
  UploadWrapper,
  Wrapper,
} from "./styles";
import { AddPhoto, Button, Img } from "..";
import { FieldHeading } from "../FieldHeading";
import { addRestaurantPhoto } from "../../redux/restaurant/actions";
import { restaurantSelector } from "../../redux/restaurant/selectors";

export const AddRestaurantPhoto: FC<IAddRestaurantPhotoProps> = ({
  closeModal,
}) => {
  // main photo
  const [mainPhoto, setMainPhoto] = useState<string>("");
  const [photo, setPhoto] = useState<File>();
  // other photos
  const [photos, setPhotos] = useState<string[]>([]);
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  // parameters for view other restaurant photos
  const defaultProportions = { width: 140, height: 90 };
  const [proportions, setProportions] = useState(defaultProportions);

  const { currentRestaurant } = useSelector(restaurantSelector);
  const dispatch = useDispatch();

  const inputMainPhotoRef = useRef<HTMLInputElement>(null);
  const inputPhotoRef = useRef<HTMLInputElement>(null);

  // depending on the number of photos, parameters are combined to render the correct sizes.
  useEffect(() => {
    switch (photos.length) {
      case 5:
      case 6:
        setProportions({ width: 140, height: 50 });
        break;
      case 7:
      case 8:
      case 9:
        setProportions({ width: 90, height: 50 });
        break;
      default:
        setProportions(defaultProportions);
        break;
    }

    photos.length > 9 && setPhotos((prevState) => prevState.slice(0, 9));
  }, [photos.length, setProportions]);

  const handleMainFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length) {
      setPhoto(event.currentTarget.files[0]);
      setMainPhoto(URL.createObjectURL(event.currentTarget.files[0]));
    }
  };

  const handleFiles = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length) {
      const files = Array.from(event.currentTarget.files);
      const selectedFiles: File[] = files.map((f) => f);
      const selectedPhotos: string[] = files.map((file) =>
        URL.createObjectURL(file)
      );

      setPhotoFiles([...selectedFiles, ...photoFiles]);
      setPhotos([...selectedPhotos, ...photos]);
    }
  };

  const newMainPhoto = () => {
    inputMainPhotoRef?.current && inputMainPhotoRef.current.click();
  };

  const newGalleryPhoto = () => inputPhotoRef?.current?.click();

  const onSavePhotos = () => {
    if (currentRestaurant && photo) {
      dispatch(
        addRestaurantPhoto(
          {
            restaurantId: currentRestaurant?._id,
            isNewRestaurant: false,
            photo,
          },
          closeModal
        )
      );
    }
  };

  return (
    <>
      <FieldHeading>Add photos of your restaurant</FieldHeading>
      <Wrapper>
        <PhotoBlock>
          <AddPhotoWrapper>
            <PhotoPreview>
              {mainPhoto && (
                <Img
                  borderRadius={15}
                  marginBottom={20}
                  marginRight={15}
                  width={250}
                  height={170}
                  src={mainPhoto}
                />
              )}

              {(photos.length || mainPhoto) && (
                <GalleryPhotos>
                  {photos.map((photo) => (
                    <Img
                      {...proportions}
                      key={photo}
                      src={photo}
                      marginRight={10}
                      marginBottom={10}
                      borderRadius={10}
                    />
                  ))}
                </GalleryPhotos>
              )}
            </PhotoPreview>

            <UploadWrapper withPhoto={!!mainPhoto || !!photos.length}>
              <AddPhoto marginRight={20} onClick={newMainPhoto}>
                Add main photo
              </AddPhoto>
              <AddPhoto onClick={newGalleryPhoto}>Add photo</AddPhoto>
            </UploadWrapper>
          </AddPhotoWrapper>
        </PhotoBlock>
        <Button
          disabled={!mainPhoto && !photos.length}
          onClick={onSavePhotos}
          text="Add"
          center
        />

        <UploadPhoto
          ref={inputMainPhotoRef}
          onInput={handleMainFile}
          type="file"
          accept=".png,.jpeg,.jpg"
        />
        <UploadPhoto
          ref={inputPhotoRef}
          onInput={handleFiles}
          type="file"
          accept=".png,.jpeg,.jpg"
          multiple
        />
      </Wrapper>
    </>
  );
};
