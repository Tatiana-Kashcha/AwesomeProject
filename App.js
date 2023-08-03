import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  TextInput, View, Text, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>Увійти</Text>
      <TextInput style={styles.input} placeholder='Адреса електронної пошти'/>
      <TextInput style={styles.input} />
      <Button style={styles.button} title='Увійти'/>
      <Text style="auto">Немає акаунту? Зареєструватися</Text>
       <StatusBar style="auto"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
      fontFamily: 'Roboto',
      fontSize: 30,
      fontWeight: 'medium',
  },
  input: {
    borderColor: '#E8E8E8',
    backgroundColor: '#f6f6f6',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#f6f6f6',
    padding: 10,
  },
});
