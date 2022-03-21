import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/Components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome title="React native com bare workflow and typescript" />
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
