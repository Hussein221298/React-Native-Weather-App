import { StyleSheet, Text, View } from 'react-native';
import wmoMap from './../utils/wmo-codes-to-description'
import getHourFromDate from './../utils/get-hour-from-date'

export default function HourlyForecastList(props) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.hour }>{getHourFromDate(props.forecast.date)}</Text>
      <Text style={ styles.text }>{wmoMap(props.forecast.weatherCode)}</Text>
      <Text style={ styles.text }>{props.forecast.temperature}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#89AFFF',
    opacity: 0.8,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    paddingBottom: 10,
    paddingTop: 10,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
  hour: {
    width: 40,
    color: '#FFF',
    fontSize: 16,
  }
 });
 