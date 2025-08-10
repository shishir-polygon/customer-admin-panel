import { ChangeEvent, FC, useRef, useState } from "react";

import IUploadPhotoBlockProps from "./props";
import { PhotoBlock, RestaurantPhoto, UploadPhoto, Wrapper } from "./styles";
import { FieldHeading } from "..";

export const UploadPhotoBlock: FC<IUploadPhotoBlockProps> = ({ setPhoto }) => {
  const [photoImg, setPhotoImg] = useState<string>("");

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length) {
      setPhoto(event.currentTarget.files[0]);
      const reader = new FileReader();
      reader.addEventListener("loadend", (e: ProgressEvent<FileReader>) => {
        typeof e.target?.result === "string" && setPhotoImg(e.target?.result);
      });
      reader.readAsDataURL(event.currentTarget.files[0]);
    }
  };

  const newImgHandler = () => {
    inputFileRef?.current && inputFileRef.current.click();
  };

  return (
    <Wrapper>
      <FieldHeading marginLeft={45}>Add photos of your restaurant</FieldHeading>
      {photoImg ? (
        <RestaurantPhoto src={photoImg} onClick={newImgHandler} />
      ) : (
        <PhotoBlock />
      )}
      <UploadPhoto
        ref={inputFileRef}
        onInput={handleFile}
        type="file"
        accept=".png,.jpeg,.jpg"
      />
    </Wrapper>
  );
};
