import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default TemperatureUnitOptions = ({ selectedTemperatureUnit, handleUnitChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Temperature Unit:</Text>

      <TouchableOpacity
        style={[styles.option, selectedTemperatureUnit.name === 'celsius' && styles.selectedOption]}
        onPress={() => handleUnitChange({
          name: 'celsius',
          symbol: '\u2103'
        })}
      >
        <Text style={styles.optionText}>°C</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, selectedTemperatureUnit.name === 'fahrenheit' && styles.selectedOption]}
        onPress={() => handleUnitChange({
          name: 'fahrenheit',
          symbol: '\u2109'
        })}
      >
        <Text style={styles.optionText}>°F</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    paddingRight: 10
  },
  option: {
    width: 70,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
  optionText: {
    fontSize: 20,
  },
  selectedUnit: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
