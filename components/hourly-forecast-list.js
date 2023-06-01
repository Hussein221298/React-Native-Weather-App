import { StyleSheet, FlatList, SafeAreaView, Dimensions, StatusBar } from 'react-native';
import HourlyForecastItem from './hourly-forecast-item';

const { height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

const forecastItem = ({ item }) => (
  <HourlyForecastItem 
    forecast={item}
  />
);

export default function HourlyForecastList(props) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={props.hourlyData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index}
        renderItem={forecastItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderTopColor: '#4e75b2',
    height: ((height + statusBarHeight)/2),
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
 });
 