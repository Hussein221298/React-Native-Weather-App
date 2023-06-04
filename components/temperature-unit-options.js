import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default TemperatureUnitOptions = ({ selectedTemperatureUnit, handleUnitChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Temperature Unit:</Text>

      <TouchableOpacity
        style={[styles.option, selectedTemperatureUnit.name === 'celsius' && styles.selectedOption]}
        onPress={() =>
          handleUnitChange({
            name: 'celsius',
            symbol: '\u2103',
          })
        }
      >
        <Text style={[styles.optionText, selectedTemperatureUnit.name === 'celsius' && styles.selectedText]}>°C</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, selectedTemperatureUnit.name === 'fahrenheit' && styles.selectedOption]}
        onPress={() =>
          handleUnitChange({
            name: 'fahrenheit',
            symbol: '\u2109',
          })
        }
      >
        <Text style={[styles.optionText, selectedTemperatureUnit.name === 'fahrenheit' && styles.selectedText]}>
          °F
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  option: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  selectedOption: {
    backgroundColor: '#2196F3',
  },
  selectedText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
