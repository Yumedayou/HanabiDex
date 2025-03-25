import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ScannerScreen from './ScannerScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScannerScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // nice black backdrop for scanner
  },
});