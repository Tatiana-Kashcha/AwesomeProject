import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "./src/components/LoginScreen";
import { gStyle } from "./styles/gStyle";

const background = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={gStyle.container}>
      <StatusBar style="auto" />
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
