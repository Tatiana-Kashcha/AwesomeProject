import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  SafeAreaView } from 'react-native';
import LoginScreen from './src/components/LoginScreen';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto"/>
      <LoginScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
