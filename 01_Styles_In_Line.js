import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{margin:16, borderWidth:2, borderColor:'red', padding:16}}>Open up App.js to start working on your vidal app with changes!</Text>
      <Button title='Haz click aqui!' ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
