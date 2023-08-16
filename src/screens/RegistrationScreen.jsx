import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Formik } from "formik";

import addIcons from "../assets/add.png";

export default function RegistrationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.thumb}>
        <View style={styles.avatar}>
          <Image source={addIcons} style={styles.iconAdd} />
        </View>
        <Text style={styles.textHeader}>Реєстрація</Text>
        <Formik>
          <View style={styles.form}>
            <TextInput
              style={[styles.input, styles.textBasic, styles.inputFirst]}
              placeholder="Логін"
            />
            <TextInput
              style={[styles.input, styles.textBasic]}
              placeholder="Адреса електронної пошти"
            />
            <TextInput
              style={[styles.input, styles.textBasic]}
              placeholder="Пароль"
            />

            <TouchableOpacity style={styles.button}>
              <Text style={[styles.textBasic, styles.textButton]}>Увійти</Text>
            </TouchableOpacity>
          </View>
        </Formik>
        <Text style={[styles.textBasic, styles.textDesc]}>
          Вже є акаунт? Увійти
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
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  iconAdd: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 12,
    right: -13,
  },
  thumb: {
    position: "relative",
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  textHeader: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    marginTop: 72,
  },
  form: {
    width: "100%",
    marginTop: 22,
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
  textBasic: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
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
});
