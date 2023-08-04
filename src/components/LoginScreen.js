import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button } from 'react-native';
import { gStyle } from '../../styles/gStyle';

export default function LoginScreen() {
  return (
    <SafeAreaView style={gStyle.container}>
      <View style={[gStyle.thumb, styles.thumb]}>
        <Text style={gStyle.header}>Увійти</Text>

        <View style={gStyle.form}>
          <TextInput style={[gStyle.input, styles.input]} placeholder='Адреса електронної пошти'/>
          <TextInput style={gStyle.input} placeholder='Пароль'/>
          <Button padding= '10' borderRadius= '100' color="#FF6C00" marginTop='43' title='Увійти'  />
        </View>
        <Text style={gStyle.textDesc}>
          Немає акаунту? 
          <Text style={styles.textReg}> Зареєструватися</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  thumb: {
    flex: 0.6,
  },
  button: {
    padding: 10,
    borderRadius: 100,
    color:"#FF6C00",
  },
  input: {
    marginTop: 0,
  },
  textReg: {
    textDecorationLine: 'underline',
  }
});
