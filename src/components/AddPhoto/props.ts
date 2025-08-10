import React from "react";

export default interface IAddPhotoProps {
  width?: number;
  marginRight?: number;
  marginBottom?: number;
  onClick?: () => void;
  children: React.ReactNode;
}
