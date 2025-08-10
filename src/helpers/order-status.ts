import { colors } from "../utils/colors";
import { OrderStatusType } from "../utils/types";

export const statusColor = (
  status: OrderStatusType,
  fontColor?: boolean
): string => {
  if (!fontColor) {
    switch (status) {
      case OrderStatusType.Open:
        return colors.BROOM;
      case OrderStatusType.Pending:
        return colors.PERSIAN_BLUE;
      case OrderStatusType.Closed:
        return colors.LIMA;
      case OrderStatusType.Failed:
        return colors.RED_ORANGE;
      default:
        return colors.KILLARNEY;
    }
  } else {
    return status === OrderStatusType.Open ? colors.BLACK : colors.WHITE;
  }
};
