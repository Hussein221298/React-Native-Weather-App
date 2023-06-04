import { StyleSheet, Text, View } from 'react-native';
import getHourFromDate from './../utils/get-hour-from-date'
import WeatherIcon from './weather-icon';
import { ThemeContext } from './../theme-context';
import { useContext } from 'react';

export default function HourlyForecastList({ forecast }) {
  const theme = useContext(ThemeContext);

  return (
    <View style={ [styles.container, forecast.isLastItem && styles.lastItem] }>
      <Text style={ [styles.text(theme), styles.hour] }>{getHourFromDate(forecast.date)}</Text>
      <WeatherIcon weatherCode={forecast.weatherCode} isDay={forecast.isDay} />
      <View style={ styles.temperature }>
        <Text style={ styles.text(theme) }>{forecast.temperature} {forecast.temperatureUnit.symbol}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    padding: 10,
    alignItems: 'center'
  }, lastItem: {
    borderBottomWidth: 0,
  }, text: (theme) => ({
    color: theme.textColor,
    fontWeight: 600,
    fontSize: 18,
  }), hour: {
    width: 50,
  }, temperature: {
    width: 50,
    display: 'flex',
    alignItems: 'flex-end'
  },
 });
 