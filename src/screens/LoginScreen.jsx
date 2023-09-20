import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import LoginForm from "../components/LoginForm";

export default function LoginScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={-90}
        >
          <View style={styles.thumb}>
            <Text style={styles.textHeader}>Увійти</Text>

            <LoginForm />

            <View style={styles.textDiv}>
              <TouchableOpacity>
                <Text style={[styles.textBasic, styles.textDesc]}>
                  Немає акаунту?
                  <Text style={styles.textReg}> Зареєструватися</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  thumb: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  textHeader: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    marginTop: 22,
  },
  textBasic: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  inputFirst: {
    marginTop: 0,
  },
  textDesc: {
    color: "#1B4371",
  },
  textReg: {
    textDecorationLine: "underline",
    marginLeft: 10,
  },
  textDiv: {
    marginTop: 10,
  },
});
