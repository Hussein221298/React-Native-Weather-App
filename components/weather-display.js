import { View, Text, StyleSheet, Dimensions } from 'react-native';
import wmoMap from '../utils/wmo-codes-to-description'
import { ThemeContext } from './../theme-context';
import { useContext } from 'react';

const { height } = Dimensions.get('window');

export default function weatherDisplay(props) {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={ styles.city(theme) }>
        {props.city}
      </Text>
      <View style={styles.currentTemperatureContainer}>
        <Text style={styles.temperatureValue(theme)}>{props.currentTemperature}</Text>
        <Text style={styles.temperatureUnit(theme)}>{props.temperatureUnit.symbol}</Text>
      </View>

      <Text style={styles.weatherCode(theme)}>
        {wmoMap(props.weather.weatherCode).description}
      </Text>

      <View style={styles.temperatureRange}>
        <Text style={styles.temperatureRangeValue(theme)}>
          {props.weather.minTemp} - {props.weather.maxTemp} 
        </Text>
        <Text style={styles.temperatureRangeUnit(theme)}>{props.temperatureUnit.symbol}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { display: 'flex', paddingTop: 40, alignItems: 'center', height: ((height - 40)/2) },
  city: (theme) => ({ fontSize: 25, fontWeight: 700, color: theme.textColor }),
  currentTemperatureContainer: { display: 'flex', flexDirection: 'row', alignItems: 'flex-start', height: 100 },
  temperatureValue: (theme) => ({ fontSize: 100, color: theme.textColor }),
  temperatureUnit: (theme) => ({ marginTop: 20, fontSize: 30, color: theme.textColor }),
  temperatureRange: { display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 },
  temperatureRangeValue: (theme) => ({ fontWeight: 700, fontSize: 20, color: theme.textColor }),
  temperatureRangeUnit: (theme) => ({ fontWeight: 700, fontSize: 15, color: theme.textColor }),
  weatherCode: (theme) => ({ fontSize: 30, color: theme.textColor, marginBottom: 3 })
});
 