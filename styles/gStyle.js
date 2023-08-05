import { StyleSheet } from 'react-native';

/** Глобальні стилі додатку */

export const gStyle = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    borderWidth: 1,
  },
  thumb: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },
  textHeader: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 32,
  },
  textBasic: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
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
    marginTop: 16,
    padding: 16
  },
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor:"#FF6C00",
    marginTop: 43,
  },
  textButton: {
    color: "#ffffff",
    textAlign: "center",
  },
  textDesc: {
    color: '#1B4371',
    marginTop: 16,
  },
});