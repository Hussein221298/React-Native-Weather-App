import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default ErrorPage = ({ hourlyDataErrorMessage, dailyDataErrorMessage, onRefresh }) => {
  return (
    <View style={styles.container}>
      <View style={styles.errorContainer}>
        <Icon name="alert-circle" size={80} color="red" style={styles.errorIcon} />
        {dailyDataErrorMessage && <Text style={styles.errorText}>Daily Data Error: {dailyDataErrorMessage}</Text>}
        {hourlyDataErrorMessage && <Text style={styles.errorText}>Hourly Data Error: {hourlyDataErrorMessage}</Text>}
      </View>
      <TouchableOpacity style={styles.refreshButton} onPress={onRefresh}>
        <Icon name="refresh-cw" size={24} color="white" style={styles.refreshIcon} />
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  errorContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  errorIcon: {
    marginBottom: 10,
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  refreshButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  refreshIcon: {
    marginRight: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
