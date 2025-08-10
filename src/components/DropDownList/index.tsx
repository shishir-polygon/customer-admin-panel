import { FC, useState } from "react";

import IDropDownListProps from "./props";
import { CheckedItem, DropDownWrapper, Item, List } from "./styles";
import { Position } from "../../utils/types";

export const DropDownList: FC<IDropDownListProps> = ({
  items,
  onCheckItem,
}) => {
  const [showList, setShowList] = useState(false);
  const [checkedItem, setCheckedItem] = useState(items[0].text);

  const listVisibilityHandler = () => setShowList((prevState) => !prevState);
  const onCheckItemHandler = (item: Position) => {
    onCheckItem(item);
    setCheckedItem(item);
  };

  return (
    <DropDownWrapper onClick={listVisibilityHandler}>
      <CheckedItem>{checkedItem}</CheckedItem>
      {showList && (
        <List>
          {items.map((item) => (
            <Item
              key={item.text}
              onClick={() => onCheckItemHandler(item.value)}
            >
              {item.text}
            </Item>
          ))}
        </List>
      )}
    </DropDownWrapper>
  );
};
