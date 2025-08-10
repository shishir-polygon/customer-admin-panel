import { ChangeEvent, FocusEvent } from "react";

export default interface IInputProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  name?: string;
  title?: string;
  isSearch?: boolean;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingLeft?: number;
  placeholder?: string;
  placeholderOnCenter?: boolean;
  width?: string;
  height?: number;
  borderRadius?: number;
  color?: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  disabled?: boolean;
}
