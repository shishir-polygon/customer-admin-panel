import { FC } from "react";
import { useFormik } from "formik";

import INotificationsScreenProps from "./props";
import { NotificationForm } from "./styles";
import {
  Button,
  Heading,
  Input,
  SmoothEffect,
  Textarea,
} from "../../components";

export const NotificationsScreen: FC<INotificationsScreenProps> = () => {
  const {
    values: { title, description },
    handleChange,
    handleSubmit,
  } = useFormik({
    onSubmit: () => {},
    initialValues: {
      title: "",
      description: "",
    },
  });

  return (
    <SmoothEffect>
      <NotificationForm onSubmit={handleSubmit}>
        <Heading
          bolder
          text="Notifications"
          marginBottom={40}
          textAlign="left"
        />

        <Input
          name="title"
          value={title}
          onChange={handleChange}
          title="Title"
          width="470px"
          placeholder="Title"
        />

        <Textarea
          name="description"
          value={description}
          onChange={handleChange}
          marginBottom={81}
          width="550px"
          title="Here you can send a notification from your restaurant to all Panda users"
          placeholder="Text"
        />

        <Button text="Send" />
      </NotificationForm>
    </SmoothEffect>
  );
};
