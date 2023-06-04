import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const serialize = ({ data }) => {
  if (!data.results) {
    return [];
  } else {
    return data.results.map(option => ({
      label: option.name,
      value: option.id,
      latitude: option.latitude,
      longitude: option.longitude,
      timezone: option.timezone
    }))
  }
}

const DropdownMenu = ({ selectedOption, setSelectedOption}) => {
  const [searchQuery, setSearchQuery] = useState(selectedOption.label);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  useEffect(() => {
    (async () => {
      if (searchQuery.length > 1) {
        try {
          const response = await axios.request({
            url: `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=5`,
            method: 'GET',
          });

          let options = serialize(response);
          setDropdownOptions(options);
        } catch(error) {
          console.log(error);
            throw error;
        }
      } else {
        setDropdownOptions([]);
      }
    })()
  }, [searchQuery]);

  const handleValueChange = (item) => {
    setSelectedOption(item);
    setIsDropdownVisible(false);
    setSearchQuery(item.label);
  };

  const renderDropdownOption = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleValueChange(item)}
      style={styles.optionContainer}
    >
      <Text style={styles.optionText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <TextInput
          style={styles.input}
          placeholder="Enter a location"
          value={searchQuery}
          onChangeText={setSearchQuery}
          editable={isDropdownVisible}
        />
      </TouchableOpacity>

      {isDropdownVisible && dropdownOptions.length > 0 && (
        <FlatList
          data={dropdownOptions}
          renderItem={renderDropdownOption}
          keyExtractor={(item) => item.value}
          style={styles.dropdownContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    overflow: 'hidden',
  }, input: {
    height: 40,
    paddingHorizontal: 10,
    color: '#000',
    fontWeight: '700',
    fontSize: 16
  },
  dropdownContainer: {
    maxHeight: 200,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
  }, optionContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  }, optionText: {
    fontSize: 16,
  }
});

export default DropdownMenu;