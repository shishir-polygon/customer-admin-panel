import { ChangeEvent } from "react";

export default interface ITextareaProps {
  marginBottom?: number;
  width?: string;
  title?: string;
  placeholder?: string;
  name?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
