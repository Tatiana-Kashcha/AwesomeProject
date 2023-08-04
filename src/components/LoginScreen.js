import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button } from 'react-native';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.thumb}>
        <Text style={styles.header}>Увійти</Text>

        <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Адреса електронної пошти'/>
        <TextInput style={styles.input} placeholder='************'/>
        <Button padding= '10' borderRadius= '100' color="#FF6C00" title='Увійти'  />
        </View>
        <Text style={styles.textDesc}>
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
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    borderWidth: 1,
  },
  thumb: {
    flex: 0.6,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    
  },
  header: {
      fontFamily: 'Roboto',
      fontSize: 30,
      fontWeight: 'medium',
      marginTop: 32,
  },
  form: {
    width: '100%',
    marginTop: 32,
  },
  input: {
    borderColor: '#E8E8E8',
    backgroundColor: '#f6f6f6',
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    
  },
  button: {
    padding: 10,
    borderRadius: 100,
    color:"#FF6C00",
  },
  textDesc: {
    color: '#1B4371',
    marginTop: 16,
  },
  textReg: {
    textDecorationLine: 'underline',
  }
});
