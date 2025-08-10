import { FC } from "react";

import IOrderProps from "./props";
import {
  DetailWrapper,
  DownloadBlock,
  InfoBlock,
  OrderDate,
  OrderHeading,
  OrderInfoBlock,
  OrderStatus,
  OrderWrapper,
} from "./styles";
import { Img, Title, Text, OrderDetails } from "..";
import { IMAGES } from "../../assets";
import { colors } from "../../utils/colors";
import { fixPrice } from "../../helpers/price-helper";
import { statusColor } from "../../helpers/order-status";
import { correctDateFormat } from "../../helpers/date-helper";

export const Order: FC<IOrderProps> = ({ order, fakeOrderTableNumber }) => (
  <OrderWrapper>
    {order && (
      <>
        <InfoBlock>
          <OrderHeading>Order #{order.decimalDigits}</OrderHeading>
          <OrderStatus
            backgroundColor={statusColor(order.status)}
            color={statusColor(order.status, true)}
          >
            {order.status.substring(0, 1).toUpperCase() +
              order.status.substring(1)}
          </OrderStatus>
        </InfoBlock>

        <DetailWrapper>
          <Title
            bolder
            text="Details"
            fontSize={20}
            marginBottom={20}
            marginTop={30}
          />
          <OrderDate>{correctDateFormat(order.createdAt)}</OrderDate>
        </DetailWrapper>

        <InfoBlock>
          <OrderDetails fakeOrderTableNumber={fakeOrderTableNumber} />
        </InfoBlock>

        <OrderInfoBlock>
          <Title
            text="Order info"
            fontSize={20}
            marginBottom={20}
            marginTop={20}
          />

          <InfoBlock marginBottom={20}>
            <Text fontSize={14} color={colors.NOBEL}>
              Items
            </Text>
            <Text fontSize={14} color={colors.NOBEL}>
              Price
            </Text>
          </InfoBlock>

          {order.items.map((item, index) => (
            <InfoBlock key={item.name + index} withBorder>
              <Text>{item.name}</Text>
              <Text>{fixPrice(item.price)}</Text>
            </InfoBlock>
          ))}

          <InfoBlock marginTop={10}>
            <Text marginTop={10}>Service charge:</Text>
            <Text marginTop={10}>12£</Text>
          </InfoBlock>

          <InfoBlock marginTop={20}>
            <Text fontWeight="bold" fontSize={24}>
              In total
            </Text>
            <Text fontWeight="bold" fontSize={24}>
              {fixPrice(order.payment.amount)}
            </Text>
          </InfoBlock>

          <DownloadBlock>
            <Text
              color={colors.TOREAL_BAY}
              fontSize={16}
              fontWeight="500"
              marginTop={30}
            >
              Download Receipt
            </Text>
            <Img
              src={IMAGES.DOWNLOAD}
              width={16}
              height={16}
              marginLeft={10}
              marginBottom={2}
            />
          </DownloadBlock>
        </OrderInfoBlock>
      </>
    )}
  </OrderWrapper>
);
