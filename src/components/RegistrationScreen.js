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
import { gStyle } from "../../styles/gStyle";
import { Formik } from "formik";

import addIcons from "../assets/add.png";

export default function RegistrationScreen() {
  return (
    <SafeAreaView style={gStyle.container}>
      <View style={[gStyle.thumb, styles.thumb]}>
        <View style={styles.avatar}>
          <Image source={addIcons} style={styles.iconAdd} />
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
  iconAdd: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 12,
    right: -13,
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
