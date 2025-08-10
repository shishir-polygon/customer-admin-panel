import { FC, useState } from "react";

import IOrdersScreenProps from "./props";
import { Wrapper } from "./styles";
import { Order, OrdersList, SmoothEffect } from "../../components";
import { IOrder } from "../../utils/types";

export const OrdersScreen: FC<IOrdersScreenProps> = () => {
  const [checkedOrder, setCheckedOrder] = useState<IOrder | null>(null);
  const [checkedOrderTable, setCheckedOrderTable] = useState(1);

  const onCheckOrder = (order: IOrder, table: number) => {
    setCheckedOrder(order);
    setCheckedOrderTable(table);
  };

  return (
    <SmoothEffect>
      <Wrapper>
        <OrdersList
          onCheckOrder={onCheckOrder}
          checkedOrderId={checkedOrder?._id}
        />
        <Order order={checkedOrder} fakeOrderTableNumber={checkedOrderTable} />
      </Wrapper>
    </SmoothEffect>
  );
};
