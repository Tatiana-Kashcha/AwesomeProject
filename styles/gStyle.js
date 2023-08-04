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
  header: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    textAlign: 'center',
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
  textDesc: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
    marginTop: 16,
  },
});