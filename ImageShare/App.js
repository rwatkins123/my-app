import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://i.gyazo.com/a7438d48207d95dcaf1213b20c97a42c.jpg"}} style={styles.logo} />
      <Text style={styles.instructions}>
        Press the button to upload your plant photo!</Text>

        <TouchableOpacity
          onPress={() => alert('Hello Plants!')}
          style={styles.button}>
          <Text style={styles.buttonText}>Upload a photo</Text>
        </TouchableOpacity>

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
  logo: {
    width: 375,
    height: 350,
    marginBottom:10,
  },
  instructions: {
    color: 'blue',
    fontSize: 18,
    marginHorizontal:5
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  }
});
