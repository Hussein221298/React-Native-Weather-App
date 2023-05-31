import { StyleSheet, Text, View, Dimensions } from 'react-native';
import wmoMap from '../utils/wmo-codes-to-description'

export default function weatherDisplay(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.city}
      </Text>
      <View style={styles.currentTemperatureContainer}>
        <Text style={styles.temperatureValue}>{props.currentTemperature}</Text>
        <Text style={styles.temperatureUnit}>{props.temperatureUnit}</Text>
      </View>

      <Text style={styles.weatherCode}>
        {wmoMap(props.weather?.weatherCode)}
      </Text>

      <View style={styles.temperatureRange}>
        <Text style={styles.temperatureRangeValue}>
          {props.weather?.minTemp} - {props.weather?.maxTemp} 
        </Text>
        <Text style={styles.temperatureRangeUnit}>{props.temperatureUnit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { display: 'flex', paddingBottom: 30, paddingTop: 100, alignItems: 'center' },
  currentTemperatureContainer: { display: 'flex', flexDirection: 'row', alignItems: 'flex-start' },
  temperatureValue: { fontSize: 100, color: '#FFF' },
  temperatureUnit: { marginTop: 20, fontSize: 30, color: '#FFF' },
  temperatureRange: { display: 'flex', flexDirection: 'row', alignItems: 'flex-start' },
  temperatureRangeValue: { fontSize: 20, color: '#FFF' },
  temperatureRangeUnit: { marginTop: 4, fontSize: 10, color: '#FFF' },
  title: { fontSize: 30, color: '#FFF' },
  weatherCode: { fontSize: 30, color: '#FFF', fontWeight: 500 }
});
 