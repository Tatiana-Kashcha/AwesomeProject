import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { gStyle } from '../../styles/gStyle';
import { Formik } from 'formik';

export default function LoginScreen() {
  return (
    <SafeAreaView style={gStyle.container}>
      <View style={[gStyle.thumb, styles.thumb]}>
        <Text style={gStyle.header}>Увійти</Text>
        <Formik>
          <View style={gStyle.form}>
            <TextInput style={[gStyle.input, styles.input]} placeholder='Адреса електронної пошти'/>
            <TextInput style={gStyle.input} placeholder='Пароль'/>
            
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
  thumb: {
    // flex: 0.6,
    flex: 0.7,
  },
  input: {
    marginTop: 0,
  },
  textReg: {
    textDecorationLine: 'underline',
  }
});
