import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanner, setScanned] = useState(false);
  const [Text, setText] = useState('not yet scanned')

  const askForCameraPermission  = () => {
    (
      async () => {
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == 'granted')
      }
    )
  }

  //Request Camera Permission
  useEffect


  return (
    <View style={styles.container}>
      <Text>Anang kurniawan</Text>
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
