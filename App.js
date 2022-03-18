/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigators from "./componets/navigation/Navigators";
import SignInScreen from "./componets/Screens/SignInScreen";
import WelcomeScreen from "./componets/Screens/WelcomeScreen";

export default function App() {
  return (
    //lets try and leave app.js as empty as possible

    <SignInScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
