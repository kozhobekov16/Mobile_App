import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  const handlePressButton = () => Alert.alert('Zhakshylyk', [
      { text: 'Yes' },
      { text: 'No' }
    ])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>My third project on React Native</Text>
      <Button title="Press" onPress={handlePressButton}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
