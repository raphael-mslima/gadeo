import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function EmotionalButton({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E2E',
    padding: 12,
    margin: 4,
    borderRadius: 6
  },
  label: {
    color: '#fff'
  }
});
