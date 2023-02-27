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

const isStillOverlimit = (entry) => {
  let limit = 500;
  return entry.calories > limit && !entry?.reviewed;
};

export {
  AlertPopup,
  deleteAlertMessages,
  reviewAlertMessages,
  isStillOverlimit,
};
