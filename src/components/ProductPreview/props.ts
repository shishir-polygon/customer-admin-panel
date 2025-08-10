import { IProduct } from "../../utils/types";

export default interface IProductCardPreviewProps {
  product?: IProduct;
  showProductPreview: boolean;
  onClosePreview: (isShow: boolean) => void;
}
