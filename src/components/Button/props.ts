import { ButtonStylePreset } from "../../utils/types";

export default interface IButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  marginLeft?: number;
  marginBottom?: number;
  marginTop?: number;
  width?: string;
  center?: boolean;
  preset?: ButtonStylePreset;
  disabled?: boolean;
  onClick?: () => void;
}
