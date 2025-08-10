import React from "react";

export default interface IModalProps {
  height?: number;
  showModal: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
  isMapsModal?: boolean;
  contentMaxWidth?: string;
}
