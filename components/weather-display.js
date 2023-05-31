import { StyleSheet, Text, View } from 'react-native';
import wmoMap from '../utils/wmo-codes-to-description'

export default function weatherDisplay(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Beirut
      </Text>
      <View style={styles.currentTemperatureContainer}>
        <Text style={styles.temperatureValue}>23</Text>
        <Text style={styles.temperatureUnit}>{props.weather.unit}</Text>
      </View>
      <Text style={styles.temperatureRange}>
        {props.weather.temperatureMin}/{props.weather.temperatureMax}{props.weather.unit}
      </Text>   
      <Text style={styles.condition}>
        {wmoMap(props.weather.condition)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { display: 'flex', paddingBottom: 100, paddingTop: 100, alignItems: 'center' },
  currentTemperatureContainer: { display: 'flex', flexDirection: 'row', alignItems: 'flex-start' },
  temperatureValue: { fontSize: 100, color: '#FFF' },
  temperatureUnit: { marginTop: 20, fontSize: 30, color: '#FFF' },
  title: { fontSize: 30, color: '#FFF' },
  date: { fontSize: 20, color: '#FFF' },
  temperatureRange: { fontSize: 40, color: '#FFF' },
  condition: { fontSize: 30, color: '#FFF', fontWeight: 500, marginBottom: 10 }
});
 