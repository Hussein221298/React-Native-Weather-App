import { StyleSheet, FlatList, SafeAreaView, Dimensions, StatusBar, BlurView } from 'react-native';
import HourlyForecastItem from './hourly-forecast-item';

const { height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;


const forecastItem = ({ item }) => (
  <HourlyForecastItem 
    forecast={item}
  />
);

export default function HourlyForecastList(props) {
  let forecastItemProps = props.hourlyData.map((item, index) => ({ 
    ...item,
    temperatureUnit: props.temperatureUnit,
    isLastItem: index === props.hourlyData.length -1 
  }));

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={forecastItemProps}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index}
        renderItem={forecastItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#4e75b2',
    height: ((height - 40)/2),
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
 });
 