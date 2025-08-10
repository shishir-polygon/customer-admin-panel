import { FC, useEffect } from "react";

import IModalProps from "./props";
import { Close, ModalContent, ModalWrapper } from "./styles";

export const Modal: FC<IModalProps> = ({
  children,
  height,
  showModal,
  onCloseModal,
  isMapsModal,
  contentMaxWidth,
}) => {
  useEffect(() => {
    if (showModal) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <ModalWrapper active={showModal} onClick={onCloseModal}>
      <ModalContent
        contentMaxWidth={contentMaxWidth}
        active={showModal}
        height={height}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <Close isMapsModal={isMapsModal} onClick={onCloseModal} />
      </ModalContent>
    </ModalWrapper>
  );
};
