import React from "react";

export default interface ITextProps {
  fontWeight?: string;
  lineHeight?: number;
  fontSize?: number;
  color?: string;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  maxWidth?: string;
  style?: string;
  bolder?: boolean;
  children: React.ReactNode;
}
