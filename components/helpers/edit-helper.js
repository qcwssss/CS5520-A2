import { Alert } from "react-native";

const deleteAlertMessages = {
  title: "Are you sure?",
  content: "Deleted entry can't be recovered.",
};

const reviewAlertMessages = {
  title: "Not Over-limit?",
  content: "This is over 500 calories. Think again.",
};

const AlertPopup = (alertMessages, handler) => {
  Alert.alert(alertMessages.title, alertMessages.content, [
    {
      text: "Cancel",
      style: "cancel",
    },
    {
      text: "Confirm",
      onPress: () => {
        handler();
      },
      style: "destructive",
    },
  ]);
};

export { AlertPopup, deleteAlertMessages, reviewAlertMessages };
