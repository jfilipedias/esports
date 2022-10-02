import { useRef, useEffect } from "react";
import { StatusBar } from "react-native";
import { Subscription } from "expo-modules-core";
import * as Notifications from "expo-notifications";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Background } from "./src/components/Background";
import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";
import { getPushNotificationToken } from "./src/services/getPushNotificationToken";

import "./src/services/notificationsConfig";

export default function App() {
  const getNotificationsListener = useRef<Subscription>();
  const responseNotificationsListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  });

  useEffect(() => {
    getNotificationsListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log({ notification });
      });

    responseNotificationsListener.current =
      Notifications.addNotificationResponseReceivedListener((notification) => {
        console.log({ notification });
      });

    return () => {
      if (
        getNotificationsListener.current &&
        responseNotificationsListener.current
      ) {
        Notifications.removeNotificationSubscription(
          getNotificationsListener.current
        );
        Notifications.removeNotificationSubscription(
          responseNotificationsListener.current
        );
      }
    };
  }, []);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
