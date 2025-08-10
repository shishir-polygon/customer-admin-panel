import { IProduct } from "../../utils/types";

export default interface IMenuItemProps {
  product: IProduct;
  index: number;
  onPreviewProduct: (product: IProduct) => void;
}
