import { FC } from "react";

import IMenuFilterProps from "./props";
import { CategoryName, Filter, Item } from "./styles";

export const MenuFilter: FC<IMenuFilterProps> = ({
  category,
  checkedItem,
  setActiveType,
}) => (
  <Filter>
    {category.map((item) => (
      <Item
        key={item._id}
        padding={item.name.length * 3}
        onClick={() => setActiveType(item)}
      >
        <CategoryName isActive={checkedItem === item.name}>
          {item.name}
        </CategoryName>
      </Item>
    ))}
  </Filter>
);
