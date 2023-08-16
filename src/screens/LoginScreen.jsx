import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.thumb}>
        <Text style={styles.textHeader}>Увійти</Text>
        <Formik>
          <View style={styles.form}>
            <TextInput
              style={[styles.input, styles.textBasic, styles.inputFirst]}
              placeholder="Адреса електронної пошти"
              placeholderTextColor={'#BDBDBD'}
            />
            <TextInput
              style={[styles.input, styles.textBasic]}
              placeholder="Пароль"
              placeholderTextColor={'#BDBDBD'}
            />

            <TouchableOpacity style={styles.button}>
              <Text style={[styles.textBasic, styles.textButton]}>Увійти</Text>
            </TouchableOpacity>
          </View>
        </Formik>
        <Text style={[styles.textBasic, styles.textDesc]}>
          Немає акаунту?
          <Text style={styles.textReg}> Зареєструватися</Text>
        </Text>
      </View>
    </SafeAreaView>
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
  form: {
    width: "100%",
    marginTop: 22,
  },
  textBasic: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderColor: "#E8E8E8",
    backgroundColor: "#f6f6f6",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 16,
  },
  inputFirst: {
    marginTop: 0,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginTop: 35,
  },
  textButton: {
    color: "#ffffff",
    textAlign: "center",
  },
  textDesc: {
    color: "#1B4371",
    marginTop: 10,
  },
  textReg: {
    textDecorationLine: "underline",
  },
});