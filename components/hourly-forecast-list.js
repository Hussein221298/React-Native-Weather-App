import { StyleSheet, View, FlatList, SafeAreaView, Dimensions } from 'react-native';
import HourlyForecastItem from './hourly-forecast-item';

const { height } = Dimensions.get('window');
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
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderTopColor: '#4e75b2',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
 });
 