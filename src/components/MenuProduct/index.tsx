import { FC } from "react";

import IMenuItemProps from "./props";
import {
  ItemInfoBlock,
  MenuItem,
  OldPrice,
  SalePrice,
  SaleWrapper,
} from "./styles";
import { Img, Text } from "..";
import { IMAGES } from "../../assets";
import { colors } from "../../utils/colors";
import { fixPrice } from "../../helpers/price-helper";
import { useDelay } from "../../utils/hooks";

export const MenuProduct: FC<IMenuItemProps> = ({
  product,
  onPreviewProduct,
  index,
}) => {
  const delay = useDelay(index);

  return (
    <MenuItem
      delay={delay}
      key={product._id}
      onClick={() => onPreviewProduct(product)}
      presence={product.visible}
    >
      <ItemInfoBlock marginBottom={10}>
        <ItemInfoBlock>
          <Text bolder marginTop={10}>
            {product.name}
          </Text>
          {!product.visible && (
            <Img
              src={IMAGES.RED_HAND}
              width={16}
              height={16}
              marginLeft={12}
              marginTop={15}
            />
          )}
        </ItemInfoBlock>

        {product.min < product.max ? (
          <SaleWrapper>
            <OldPrice>{product.max}</OldPrice>
            <SalePrice>{product.min}</SalePrice>
          </SaleWrapper>
        ) : (
          <Text bolder marginTop={10} marginRight={20}>
            {fixPrice(product.price)}
          </Text>
        )}
      </ItemInfoBlock>

      <Text
        fontSize={13}
        color={colors.MANATEE}
        lineHeight={19}
        maxWidth="80%"
        fontWeight="normal"
      >
        {product.description}
      </Text>
    </MenuItem>
  );
};
