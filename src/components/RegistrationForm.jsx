import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";

export default function RegistrationForm() {
  const [focus, setFocus] = useState("");
  const [hidePass, setHidePass] = useState(true);
  // const [login, setLogin] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <Formik
      initialValues={{ login: "", email: "", password: "" }}
      onSubmit={(values, action) => {
        console.log(values);
        action.resetForm();
      }}
    >
      {(props) => (
        <View style={styles.form}>
          <TextInput
            // value={props.values.login}
            //   onChangeText={props.handleCange("login")}
            placeholder="Логін"
            placeholderTextColor={"#BDBDBD"}
            style={[
              styles.input,
              styles.textBasic,
              styles.inputFirst,
              focus.FocusedItem === "login" && styles.inputOnFocus,
            ]}
            onFocus={() => setFocus({ FocusedItem: "login" })}
            onBlur={() => setFocus({ FocusedItem: "" })}
          />
          <TextInput
            // value={props.values.email}
            //   onChangeText={props.handleCange("email")}
            placeholder="Адреса електронної пошти"
            placeholderTextColor={"#BDBDBD"}
            style={[
              styles.input,
              styles.textBasic,
              focus.FocusedItem === "email" && styles.inputOnFocus,
            ]}
            onFocus={() => setFocus({ FocusedItem: "email" })}
            onBlur={() => setFocus({ FocusedItem: "" })}
          />
          <View style={styles.thumbToShow}>
            <TextInput
              //   value={props.values.password}
              // onChangeText={props.handleCange("password")}
              placeholder="Пароль"
              secureTextEntry={hidePass ? true : false}
              autoCapitalize="none"
              placeholderTextColor={"#BDBDBD"}
              style={[
                styles.input,
                styles.textBasic,
                focus.FocusedItem === "password" && styles.inputOnFocus,
              ]}
              onFocus={() => setFocus({ FocusedItem: "password" })}
              onBlur={() => setFocus({ FocusedItem: "" })}
            />

            <TouchableOpacity>
              <Text
                style={[styles.textBasic, styles.textDesc, styles.toShow]}
                onPress={() => setHidePass(!hidePass)}
              >
                Показати
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
            <Text style={[styles.textBasic, styles.textButton]}>
              Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    marginTop: 22,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: "100%",
    backgroundColor: "#f6f6f6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 16,
  },
  inputOnFocus: {
    backgroundColor: "#fff",
    borderColor: "#FF6C00",
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
  },
  thumbToShow: {
    position: "relative",
  },
  toShow: {
    position: "absolute",
    top: -38,
    right: 16,
  },
});
