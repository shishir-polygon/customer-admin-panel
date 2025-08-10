import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterPeriods, daysOfWeek, mockMonth } from "./data";
import IOrdersListProps from "./props";
import {
  Day,
  AdditionalFilter,
  List,
  ListWrapper,
  OrderList,
  Period,
  PeriodsFilter,
} from "./styles";
import { Heading, Loader, OrderFilters, OrderListItem } from "..";
import { OrdersFilter, WeekFilter } from "../../utils/constants";
import { ordersSelector } from "../../redux/orders/selectors";
import { fetchOrders, fetchRestaurantOrders } from "../../redux/orders/actions";

export const OrdersList: FC<IOrdersListProps> = ({
  onCheckOrder,
  checkedOrderId,
}) => {
  const [period, setPeriod] = useState<OrdersFilter>(OrdersFilter.Day);
  const [checkDay, setCheckDay] = useState<WeekFilter>(WeekFilter.Mon);
  const [checkMonthDay, setCheckMonthDay] = useState("June 1");

  const { orders, fetching } = useSelector(ordersSelector);
  const dispatch = useDispatch();
  // console.log(orders);
  useEffect(() => {
    // dispatch(fetchOrders());
    dispatch(fetchRestaurantOrders('6149fb393625ac6d05f41828'));
  }, [dispatch]);

  const onCheckPeriod = (period: OrdersFilter) => setPeriod(period);
  const onCheckDay = (day: WeekFilter) => setCheckDay(day);
  const onCheckMonthDay = (day: string) => setCheckMonthDay(day);

  const additionalFilter = () => {
    switch (period) {
      case OrdersFilter.Day:
        return null;
      case OrdersFilter.Week:
        return daysOfWeek.map((day) => (
          <Day
            key={day}
            onClick={() => onCheckDay(day)}
            active={day === checkDay}
          >
            {day}
          </Day>
        ));
      case OrdersFilter.Month:
        return mockMonth.map((day) => (
          <Day
            key={day}
            onClick={() => onCheckMonthDay(day)}
            active={day === checkMonthDay}
          >
            {day}
          </Day>
        ));
      default:
        break;
    }
  };

  return (
    <ListWrapper>
      {fetching && <Loader mini />}

      <Heading
        bolder
        text="Orders"
        textAlign="left"
        marginTop={20}
        marginBottom={20}
      />
      <PeriodsFilter>
        {filterPeriods.map((p, index) => (
          <Period
            key={index}
            onClick={() => onCheckPeriod(p)}
            active={p === period}
          >
            {p}
          </Period>
        ))}
      </PeriodsFilter>

      <OrderFilters />

      <List>
        <AdditionalFilter>{additionalFilter()}</AdditionalFilter>
        <OrderList>
          {orders.map((order, index) => (
            <OrderListItem
              key={order._id}
              order={order}
              index={index}
              checkedOrderId={checkedOrderId}
              onCheckOrder={onCheckOrder}
            />
          ))}
        </OrderList>
      </List>
    </ListWrapper>
  );
};
