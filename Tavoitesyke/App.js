import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerRate, setLowerRate] = useState(null);
  const [upperRate, setUpperRate] = useState(null);

  const calculateRates = (age) => {
    const lower = Math.floor((220 - age) * 0.65);
    const upper = Math.floor((220 - age) * 0.85);

    setLowerRate(lower);
    setUpperRate(upper);
  };

  const handleAgeChange = (input) => {
    const ageValue = parseInt(input, 10);

    if (!isNaN(ageValue) && ageValue > 0) {
      setAge(ageValue);
      calculateRates(ageValue);
    } else {
      setAge('');
      setLowerRate(null);
      setUpperRate(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <Text style={styles.label}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        value={age.toString()}
        onChangeText={handleAgeChange}
        keyboardType="numeric"
      />
      <View style={styles.result}>
        {lowerRate !== null && (
          <Text style={styles.text}>Lower Limit: {lowerRate} bpm</Text>
        )}
        {upperRate !== null && (
          <Text style={styles.text}>Upper Limit: {upperRate} bpm</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    textAlign: 'center',
  },
  result: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});
