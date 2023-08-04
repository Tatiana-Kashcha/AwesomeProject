import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './src/components/LoginScreen';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <LoginScreen/>
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
});
