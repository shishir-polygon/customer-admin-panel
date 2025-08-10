import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import INotificationPopUpProps from "./props";
import { CloseNotification, Notification } from "./styles";
import { setAppError } from "../../redux/app/actions";

export const NotificationPopUp: FC<INotificationPopUpProps> = ({
  error,
  type,
  closeSuccessPopUp,
}) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setShowPopUp(!!error);
  }, [error]);

  const clearError = () => {
    if (type === "error") {
      setShowPopUp(false);
      setTimeout(() => dispatch(setAppError(null)), 500);
    } else {
      setShowPopUp(false);
      if (closeSuccessPopUp) {
        setTimeout(() => closeSuccessPopUp(null), 500);
      }
    }
  };

  return (
    <Notification type={type} show={showPopUp}>
      {error}
      <CloseNotification onClick={clearError} />
    </Notification>
  );
};
