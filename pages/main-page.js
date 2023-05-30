import { StyleSheet, Text, View, Button } from 'react-native';
import CurrentWeather from './../components/current-weather';
import HourlyForecastList from './../components/hourly-forecast-list';

export default function MainPage() {
  return (
    <View style={styles.currentWeather}>
      <CurrentWeather />
      <HourlyForecastList />
      <Button 
        onPress={()=>console.log('pressed')}
        title="press to Test"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  currentWeather: {
    display: 'flex',
    alignItems: 'center',
  }, 
});