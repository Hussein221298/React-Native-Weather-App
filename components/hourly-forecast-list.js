import { StyleSheet, View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import HourlyForecastItem from './hourly-forecast-item';

const HOURLY_FORECAST_LIST = [{
  id: 1,
  hour: '1 AM',
  temp: 27,
  condition: 'sunny'
},{
  id: 2,
  hour: '2 AM',
  temp: 27,
  condition: 'sunny'
},{
  id: 3,
  hour: '3 AM',
  temp: 27,
  condition: 'sunny'
},{
  id: 4,
  hour: '4 AM',
  temp: 27,
  condition: 'sunny'
},{
  id: 5,
  hour: '5 AM',
  temp: 27,
  condition: 'sunny'
},{
  id: 6,
  hour: '6 AM',
  temp: 27,
  condition: 'sunny'
},{
  id: 7,
  hour: '7 AM',
  temp: 27,
  condition: 'sunny'
}];

const forecastItem = ({ item }) => (
  <HourlyForecastItem 
    forecast={item}
  />
);

export default function HourlyForecastList() {
  return (
    <FlatList
      data={HOURLY_FORECAST_LIST}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={forecastItem}
    />

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
 });
 