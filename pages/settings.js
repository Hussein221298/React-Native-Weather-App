import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { saveSettings } from '../store/settings';
import DropdownMenu from '../components/dropdown-menu';
import TemperatureUnitOptions from '../components/temperature-unit-options';

export default function SettingsPage({ navigation }) {
  const dispatch = useDispatch();
  const { city, temperatureUnit } = useSelector((state) => state.settings);
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
        city: selectedOption,
      },
    });
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <DropdownMenu selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <TemperatureUnitOptions selectedTemperatureUnit={selectedTemperatureUnit} handleUnitChange={handleUnitChange} />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmitChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  }, buttonContainer: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 20,
    alignSelf: 'center',
  }, buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center',
  },
});