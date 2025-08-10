import { FC } from "react";

import IOrderListItemProps from "./props";
import { InfoWrapper, Order, OrderInfoBlock, OrderText } from "./styles";
import { correctTime } from "../../helpers/date-helper";
import { fixPrice } from "../../helpers/price-helper";

export const OrderListItem: FC<IOrderListItemProps> = ({
  order,
  index,
  onCheckOrder,
  checkedOrderId,
}) => (
  <Order
    onClick={() => onCheckOrder(order, index + 1)}
    key={order._id}
    isChecked={order._id === checkedOrderId}
  >
    <OrderInfoBlock>
      <InfoWrapper>
        <OrderText marginRight={21}>
          Order #{order._id.substring(order._id.length - 5)}
        </OrderText>
        <OrderText withDot fontWeight="500" fontSize={12}>
          {order.status.substring(0, 1).toUpperCase() +
            order.status.substring(1)}
        </OrderText>
      </InfoWrapper>
      <OrderText>{fixPrice(order.payment.amount)}</OrderText>
    </OrderInfoBlock>
    <OrderInfoBlock>
      <OrderText fontSize={12} fontWeight="500">
        {/* Table {order.table} */}
        {/* now server return "text table" instead of number*/}
        Table {index + 1}
      </OrderText>
      <OrderText fontSize={12} fontWeight="500">
        {correctTime(order.createdAt)}
      </OrderText>
    </OrderInfoBlock>
  </Order>
);
