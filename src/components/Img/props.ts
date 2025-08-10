import { CSSProperties } from "styled-components";

export default interface IImgProps {
  src: string;
  width?: number | string;
  height?: number | string;
  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
  marginBottom?: number;
  cursor?: string;
  borderRadius?: number;
  style?: CSSProperties;
  onClick?: () => void;
}
