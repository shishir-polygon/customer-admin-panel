import { FC, useEffect, useState } from "react";

import IProductCardPreviewProps from "./props";
import {
  Description,
  DiscountPrise,
  DiscountPriseBlock,
  ProductCard,
  ProductIngredients,
} from "./styles";
import { Button, Input, Modal, Text } from "..";
import { Cuisine } from "../RestaurantInfo/styles";
import { colors } from "../../utils/colors";
import { fixPrice } from "../../helpers/price-helper";
import { Ingredients, ProductTags } from "../../utils/constants";

export const ProductPreview: FC<IProductCardPreviewProps> = ({
  showProductPreview,
  onClosePreview,
  product,
}) => {
  const [oldPrise, setOldPrise] = useState("");

  const onClose = () => onClosePreview(false);

  useEffect(() => {
    product && setOldPrise(product.price.toString());
  }, [product]);

  if (!product) return null;

  return (
    <Modal
      contentMaxWidth="610px"
      onCloseModal={onClose}
      showModal={showProductPreview}
    >
      <ProductCard>
        <Text fontSize={30} marginBottom={20} maxWidth="70%" lineHeight={44}>
          {product.description || product.name}
        </Text>
        {product.descriptionTranslations?.nl && (
          <Description>{product.descriptionTranslations?.nl}</Description>
        )}
        <ProductIngredients>
          {product.productTags.map((tag) => (
            <Cuisine key={tag.toString()}>
              {Ingredients[tag as ProductTags]}
            </Cuisine>
          ))}
        </ProductIngredients>
        <Text
          marginBottom={30}
          fontWeight="normal"
          color={colors.BITTERSWEET}
          fontSize={22}
        >
          Please pay attention, there are allergens
        </Text>
        <DiscountPriseBlock>
          <DiscountPrise>
            <Text bolder fontSize={16} lineHeight={24}>
              Old prise
            </Text>
            <Text
              color={colors.SILVER_CHALICE}
              fontSize={12}
              fontWeight="500"
              lineHeight={18}
            >
              Here you enter the old price
            </Text>
            <Input
              type="number"
              value={oldPrise}
              onChange={(e) => setOldPrise(e.currentTarget.value)}
              width="120px"
              borderRadius={5}
              marginTop={8}
            />
          </DiscountPrise>
          <DiscountPrise alignItems="flex-end">
            <Text bolder fontSize={16} lineHeight={24}>
              Actual prise
            </Text>
            <Text
              color={colors.SILVER_CHALICE}
              fontSize={12}
              fontWeight="500"
              lineHeight={18}
            >
              Current price
            </Text>
            <Text marginTop={25} bolder fontSize={34}>
              {fixPrice(product.price / 2)}
            </Text>
          </DiscountPrise>
        </DiscountPriseBlock>
        <Button center onClick={onClose} text="Confirm" />
      </ProductCard>
    </Modal>
  );
};
