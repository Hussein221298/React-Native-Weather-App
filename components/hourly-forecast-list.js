import { StyleSheet, View, FlatList } from 'react-native';
import HourlyForecastItem from './hourly-forecast-item';

const forecastItem = ({ item }) => (
  <HourlyForecastItem 
    forecast={item}
  />
);

export default function HourlyForecastList(props) {
  return (
    <FlatList
      style={styles.container}
      data={props.hourlyList}
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
 