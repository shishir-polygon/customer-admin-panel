import { FC } from "react";

import IOrderDetailsProps from "./props";
import { Detail, ImgWrapper } from "./styles";
import { Img, Text } from "..";
import { IMAGES } from "../../assets";

export const OrderDetails: FC<IOrderDetailsProps> = ({
  fakeOrderTableNumber,
}) => {
  const details = [
    { title: "Table", img: IMAGES.TABLE },
    { title: "Pick up", img: IMAGES.SHOPPING_BAG },
    { title: "Payment", img: IMAGES.PAYMENT },
  ];

  return (
    <>
      {details.map(({ title, img }, index) => (
        <Detail key={title} img={img}>
          <Text fontWeight="normal">{title}</Text>
          {/* <Text>{index === 0 ? order?.table : "Pending"}</Text> */}
          {/* tempo fakeOrderTableNumber */}
          <Text bolder>{index === 0 ? fakeOrderTableNumber : "Pending"}</Text>
        </Detail>
      ))}

      <ImgWrapper>
        <Img width={14} src={IMAGES.HELP} />
      </ImgWrapper>
    </>
  );
};
