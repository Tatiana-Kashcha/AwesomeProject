import React, { useState } from "react";
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
  const [focus, setFocus] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.thumb}>
        <Text style={styles.textHeader}>Увійти</Text>
        <Formik>
          <View style={styles.form}>
          <TextInput
              placeholder="Адреса електронної пошти"
              placeholderTextColor={'#BDBDBD'}
              style={[styles.input, styles.textBasic, styles.inputFirst, focus.FocusedItem === "email" ? styles.inputOnFocus : styles.inputOnBlur]}
              onFocus={() => setFocus({FocusedItem: "email"})}
              onBlur={() => setFocus({FocusedItem: ""})}
            />
            <TextInput
              placeholder="Пароль"
              placeholderTextColor={'#BDBDBD'}
              style={[styles.input, styles.textBasic, focus.FocusedItem === "password" ? styles.inputOnFocus : styles.inputOnBlur]}
              onFocus={() => setFocus({FocusedItem: "password"})}
              onBlur={() => setFocus({FocusedItem: ""})}
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
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 16,
  },
  inputOnFocus: { 
    backgroundColor: "#fff",
    borderColor: '#FF6C00',
  },
  inputOnBlur: { 
    backgroundColor: "#f6f6f6",
    borderColor: '#E8E8E8' 
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
