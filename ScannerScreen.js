import React, { useState } from 'react';
import { View, Text, Button, Image, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import Tesseract from 'tesseract.js';

export default function ScannerScreen() {
  const [imageUri, setImageUri] = useState(null);
  const [scannedText, setScannedText] = useState('');
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({ base64: false });
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImageUri(uri);
      runOCR(uri);
    }
  };

  const runOCR = async (uri) => {
    try {
      setLoading(true);
      const fileBase64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
      const { data } = await Tesseract.recognize(`data:image/png;base64,${fileBase64}`, 'eng');
      setScannedText(data.text);
    } catch (error) {
      console.error('OCR failed:', error);
      setScannedText('Failed to scan image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Scan a Card</Text>

      <Button title="Take a Picture" onPress={pickImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.preview} />}

      {loading ? (
        <ActivityIndicator size="large" color="#6D28D9" style={{ marginTop: 20 }} />
      ) : (
        <Text style={styles.result}>{scannedText}</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  preview: {
    width: 250,
    height: 350,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 20
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: '#333'
  }
});
