import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Text>Hello World!</Text>
      <Text>Hello World!</Text>
      <Text>Hello World!</Text>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Text>
          Hello World! Lorem Ipsum Text</Text>
      <Button title='Tap The Button!'/>
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
  dummyText: {
    margin: 16,
    padding: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
});
