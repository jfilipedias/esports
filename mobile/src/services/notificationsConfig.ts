import * as Notifications from "expo-notifications";
import { shouldUseActivityState } from "react-native-screens";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
