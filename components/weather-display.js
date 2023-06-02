import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import wmoMap from '../utils/wmo-codes-to-description'

const { height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

export default function weatherDisplay(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>
        {props.city}
      </Text>
      <View style={styles.currentTemperatureContainer}>
        <Text style={styles.temperatureValue}>{props.currentTemperature}</Text>
        <Text style={styles.temperatureUnit}>{props.temperatureUnit.symbol}</Text>
      </View>

      <Text style={styles.weatherCode}>
        {wmoMap(props.weather.weatherCode)}
      </Text>

      <View style={styles.temperatureRange}>
        <Text style={styles.temperatureRangeValue}>
          {props.weather.minTemp} - {props.weather.maxTemp} 
        </Text>
        <Text style={styles.temperatureRangeUnit}>{props.temperatureUnit.symbol}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { display: 'flex', paddingTop: 60, alignItems: 'center', height: ((height - 40)/2) },
  currentTemperatureContainer: { display: 'flex', flexDirection: 'row', alignItems: 'flex-start' },
  temperatureValue: { fontSize: 100, color: '#FFF' },
  temperatureUnit: { marginTop: 20, fontSize: 30, color: '#FFF' },
  temperatureRange: { display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 },
  temperatureRangeValue: { fontSize: 20, color: '#FFF' },
  temperatureRangeUnit: { fontSize: 15, color: '#FFF' },
  city: { fontSize: 25, color: '#FFF' },
  weatherCode: { fontSize: 30, color: '#FFF', marginBottom: 3 }
});
 