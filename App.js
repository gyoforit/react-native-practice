import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello!!!</Text>
      <Text style={styles.text}>Hello!!!</Text> */}
      <View style={styles.yellowView}></View>
      {/* <View style={{flex: 1, backgroundColor: 'yellow'}}></View> */}
      <View style={styles.blueView}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
  yellowView: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  blueView: {
    flex: 1,
    backgroundColor: 'blue',
  }
});
