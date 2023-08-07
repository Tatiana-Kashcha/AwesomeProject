import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { gStyle } from "../../styles/gStyle";
import { Formik } from "formik";
import { Ionicons } from "@expo/vector-icons";

export default function RegistrationScreen() {
  return (
    <SafeAreaView style={gStyle.container}>
      <View style={[gStyle.thumb, styles.thumb]}>
        <View style={styles.avatar}>
          <View style={styles.circle}>
            <Ionicons name="add" size={30} style={styles.iconAdd} />
          </View>
        </View>
        <Text style={[gStyle.textHeader, styles.textHeader]}>Реєстрація</Text>
        <Formik>
          <View style={gStyle.form}>
            <TextInput
              style={[gStyle.input, gStyle.textBasic, styles.input]}
              placeholder="Логін"
            />
            <TextInput
              style={[gStyle.input, gStyle.textBasic]}
              placeholder="Адреса електронної пошти"
            />
            <TextInput
              style={[gStyle.input, gStyle.textBasic]}
              placeholder="Пароль"
            />

            <TouchableOpacity style={gStyle.button}>
              <Text style={[gStyle.textBasic, gStyle.textButton]}>Увійти</Text>
            </TouchableOpacity>
          </View>
        </Formik>
        <Text style={[gStyle.textBasic, gStyle.textDesc]}>
          Немає акаунту?
          <Text style={styles.textReg}> Зареєструватися</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 16,
    position: "absolute",
    bottom: "88%",
  },
  circle: {
    flexDirection: "column",
    borderColor: "#FF6C00",
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: "center",
    position: "absolute",
    bottom: 12,
    right: -15,
  },
  iconAdd: {
    color: "#FF6C00",
    textAlign: "center",
  },
  thumb: {
    flex: 0.7,
    position: "relative",
  },
  textHeader: {
    marginTop: 72,
  },
  input: {
    marginTop: 0,
  },
  textReg: {
    textDecorationLine: "underline",
  },
});
