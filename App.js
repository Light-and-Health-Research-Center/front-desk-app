import React from "react";

import { StyleSheet } from "react-native";
import { FrontDeskProvider } from "./contexts/FrontDeskContext";
import AppLoading from "expo-app-loading";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import HomeScreen from "./screens/HomeScreen";
import VisitorsScreen1 from "./screens/VisitorsScreen1";
import VisitorsScreen2 from "./screens/VisitorsScreen2";
import VisitorsScreen3 from "./screens/VisitorsScreen3";
import StudyParticipantsScreen1 from "./screens/StudyParticipantsScreen1";
import StudyParticipantsScreen2 from "./screens/StudyParticipantsScreen2";
import DeliveriesScreen1 from "./screens/DeliveriesScreen1";
import DeliveriesScreen2 from "./screens/DeliveriesScreen2";
import DeliveriesScreen3 from "./screens/DeliveriesScreen3";

//fonts
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter: require("./assets/fonts/Inter.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <FrontDeskProvider>
        <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VisitorsScreen1"
            component={VisitorsScreen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VisitorsScreen2"
            component={VisitorsScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VisitorsScreen3"
            component={VisitorsScreen3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StudyParticipantsScreen1"
            component={StudyParticipantsScreen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StudyParticipantsScreen2"
            component={StudyParticipantsScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DeliveriesScreen1"
            component={DeliveriesScreen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DeliveriesScreen2"
            component={DeliveriesScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DeliveriesScreen3"
            component={DeliveriesScreen3}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </FrontDeskProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Inter",
  },
});
