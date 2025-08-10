import { ChangeEvent, FC, useRef, useState } from "react";
import { useSelector } from "react-redux";

import IMenuProps from "./props";
import { MenuList, MenuWrapper, ModalContent, HiddenInput } from "./styles";
import {
  AddPhoto,
  Img,
  Modal,
  FieldHeading,
  Button,
  Loader,
  ProductPreview,
  MenuProduct,
} from "..";
import { IMAGES } from "../../assets";
import { IProduct } from "../../utils/types";
import { restaurantSelector } from "../../redux/restaurant/selectors";

export const Menu: FC<IMenuProps> = () => {
  const [photo, setPhoto] = useState(IMAGES.MOCK_HEADING_MENU);
  const [showModal, setShowModal] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const [examplePhoto, setExamplePhoto] = useState("");
  const [showPreviewProduct, setShowPreviewProduct] = useState(false);
  const [checkedProduct, setCheckedProduct] = useState<IProduct>();

  const { products, loading } = useSelector(restaurantSelector);

  const inputRef = useRef<HTMLInputElement>(null);

  const onAddNewPhoto = () => setShowModal(true);
  const onUploadPhoto = () => inputRef?.current?.click();
  const onPreviewProduct = (product: IProduct) => {
    setCheckedProduct(product);
    setShowPreviewProduct(true);
  };
  const onChangePhoto = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length) {
      setExamplePhoto(URL.createObjectURL(event.currentTarget.files[0]));
      setShowExample(true);
    }
  };
  const onCloseModal = () => {
    setShowModal(false);
    setShowExample(false);
    setExamplePhoto("");
  };
  const onSaveNewPhoto = () => {
    setPhoto(examplePhoto);
    setShowModal(false);
    setShowExample(false);
    setExamplePhoto("");
  };

  return (
    <MenuWrapper>
      <Modal height={204} onCloseModal={onCloseModal} showModal={showModal}>
        <ModalContent>
          <FieldHeading marginBottom={20}>Add photo to menu</FieldHeading>
          {showExample ? (
            <Img
              marginBottom={20}
              src={examplePhoto}
              width={200}
              height={104}
            />
          ) : (
            <AddPhoto marginBottom={30} onClick={onUploadPhoto} width={200}>
              Add photo
            </AddPhoto>
          )}
          {showExample && <Button text="Confirm" onClick={onSaveNewPhoto} />}
        </ModalContent>
      </Modal>

      <ProductPreview
        product={checkedProduct}
        showProductPreview={showPreviewProduct}
        onClosePreview={setShowPreviewProduct}
      />

      <Img
        cursor="pointer"
        onClick={onAddNewPhoto}
        src={photo}
        width={820}
        height={150}
        marginBottom={30}
      />
      <MenuList>
        {loading && <Loader mini />}

        {products.map((product, index) => (
          <MenuProduct
            key={product._id}
            index={index}
            product={product}
            onPreviewProduct={onPreviewProduct}
          />
        ))}
      </MenuList>

      <HiddenInput
        type="file"
        accept=".png,.jpeg,.jpg"
        ref={inputRef}
        onChange={onChangePhoto}
      />
    </MenuWrapper>
  );
};
