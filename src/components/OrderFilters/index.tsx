import { FC, useState } from "react";

import { activeList } from "./data";
import IOrdersFilterProps from "./props";
import {
  Filter,
  FilterItem,
  FilterList,
  FilterName,
  FilterWrapper,
} from "./styles";
import { OrderStatusType } from "../../utils/types";

export const OrderFilters: FC<IOrdersFilterProps> = () => {
  const [showActive, setActive] = useState(false);
  const [checkedFilter, setCheckedFilter] = useState<OrderStatusType>(
    OrderStatusType.Pending
  );

  const onHoverActive = () => setActive(true);
  const onMouseOutActive = () => setActive(false);
  const onCheckFilter = (type: OrderStatusType) => setCheckedFilter(type);

  return (
    <FilterWrapper>
      <Filter onMouseOver={onHoverActive} onMouseLeave={onMouseOutActive}>
        <FilterName>{checkedFilter}</FilterName>

        <FilterList isActive={showActive}>
          {activeList.map(({ value }) => (
            <FilterItem key={value} onClick={() => onCheckFilter(value)}>
              {value}
            </FilterItem>
          ))}
        </FilterList>
      </Filter>
    </FilterWrapper>
  );
};
