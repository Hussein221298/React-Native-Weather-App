import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { saveSettings } from '../store/settings'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DropdownMenu from '../components/dropdown-menu';
import TemperatureUnitOptions from '../components/temperature-unit-options';

export default function SettingsPage({ navigation }) {
  const dispatch = useDispatch();
  const { city, temperatureUnit } = useSelector(state => state.settings);

  const [selectedTemperatureUnit, setSelectedTemperatureUnit] = useState(temperatureUnit);
  const [selectedOption, setSelectedOption] = useState(city);

  const handleUnitChange = (unit) => {
    setSelectedTemperatureUnit(unit);
  };

  const handleSubmitChanges = () => {
    dispatch({
      type: saveSettings().type,
      payload: {
        temperatureUnit: selectedTemperatureUnit,
        city: selectedOption
      }
    });
    navigation.navigate('Main');
  }

  return (
    <View style={styles.container} >
      <DropdownMenu 
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <TemperatureUnitOptions 
        selectedTemperatureUnit={selectedTemperatureUnit}
        handleUnitChange={handleUnitChange}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmitChanges}>
        <Text style={styles.buttonText}>Submit Changes</Text>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
    paddingHorizontal: 5
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});