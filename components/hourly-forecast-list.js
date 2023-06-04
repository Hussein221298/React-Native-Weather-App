import { StyleSheet, FlatList, SafeAreaView, Dimensions } from 'react-native';
import HourlyForecastItem from './hourly-forecast-item';
import { ThemeContext } from './../theme-context';
import { useContext } from 'react';
import isDay from '../utils/is-day';

const { height } = Dimensions.get('window');


const forecastItem = ({ item }) => (
  <HourlyForecastItem 
    forecast={item}
  />
);

export default function HourlyForecastList(props) {
  const theme = useContext(ThemeContext);

  let forecastItemProps = props.hourlyData.map((item, index) => ({ 
    ...item,
    temperatureUnit: props.temperatureUnit,
    isLastItem: index === props.hourlyData.length -1 
  }));

  return (
    <SafeAreaView style={styles.container(isDay(props.hourlyData) ? theme.dayModeBorder: theme.nightModeBorder)}>
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
  container: (borderColor) => ({
    borderWidth: 2,
    borderColor: borderColor,
    height: ((height - 40)/2),
    borderRadius: 25,
    paddingHorizontal: 10,
  }), list: {
    display: 'flex',
    flexDirection: 'column',
  }, background: {
    ...StyleSheet.absoluteFillObject,
  },
 });
 