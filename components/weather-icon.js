import { StyleSheet, Text, View } from 'react-native';
import mapWeatherCodeToIconComponent from '../utils/map-weather-code-to-icon-component.js'

export default function HourlyForecastList({ weatherCode, isDay }) {
  let { component: Component, iconName, description} = mapWeatherCodeToIconComponent({ weatherCode, isDay })

  return (
    <View style={styles.container}>
      <Component name={iconName} size={30} color='#FFF' />
      <Text style={styles.condition}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  }, condition: {
    color: '#FFF',
    fontWeight: 600,
    marginTop: 4
  }
});
 