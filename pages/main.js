import { StyleSheet, Text, View, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WeatherDisplay from '../components/weather-display';
import HourlyForecastList from '../components/hourly-forecast-list';
import { dailyDataRequested, dailyDataFailed, getDailyWeather } from '../store/daily-weather'
import { hourlyDataRequested, hourlyDataFailed, getHourlyWeather } from '../store/hourly-weather'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getCurrentTemperature from '../utils/current-temperature'
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import formatDate from '../utils/format-date';

const { height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

export default function MainPage({ navigation }) {
  const navigationProps = useNavigation();

  const dispatch = useDispatch();
  const { settings, dailyData, hourlyData } = useSelector(state => state);
  useEffect(() => {
    dispatch({
      type: 'apiRequest',
      payload: {
        url: `https://api.open-meteo.com/v1/forecast?latitude=${+settings.city.latitude}&longitude=${settings.city.longitude}&past_days=2&timezone=GMT&temperature_unit=${settings.temperatureUnit.name}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min`,
        method: 'GET',
        onStart: dailyDataRequested().type,
        onSuccess: getDailyWeather().type,
        onError: dailyDataFailed().type
      }
    });
    dispatch({
      type: 'apiRequest',
      payload: {
        url: `https://api.open-meteo.com/v1/forecast?latitude=${+settings.city.latitude}&longitude=${settings.city.longitude}&past_days=2&timezone=GMT&temperature_unit=${settings.temperatureUnit.name}&hourly=temperature_2m,weathercode,is_day`,
        method: 'GET',
        onStart: hourlyDataRequested().type,
        onSuccess: getHourlyWeather().type,
        onError: hourlyDataFailed().type
      }
    });
    navigationProps.setOptions({
      headerShown: false
    });
  } ,[settings]);

  if (dailyData.error || hourlyData.error) {
    return <View><Text>ERROR</Text></View>;
  } else if (dailyData.loading || hourlyData.loading) {
    return <View><Text>...Loading</Text></View>;
  } else if (dailyData.initialFetch && hourlyData.initialFetch) {
    let pages = dailyData.dailyWeatherData.dailyWeather.map((dailyDataItem, index) => (
      <View style={styles.container} key={index}>
        <LinearGradient colors={['#89AFFF', '#000']} >
          <View style={styles.header}>
            <View style={styles.date} >
              <Text style={styles.dateText} >{formatDate(dailyDataItem.date)}</Text>
            </View>

            <View style={styles.settingsButton} >
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Icon name='gear' size={30} color='#FFF' />
              </TouchableOpacity>
            </View>
          </View>

          <WeatherDisplay
            weather={dailyDataItem}
            temperatureUnit={settings.temperatureUnit}
            currentTemperature={getCurrentTemperature(hourlyData.hourlyWeatherData.hourlyWeather[index])}
            city={settings.city.label}
          />

           <View style={styles.hourlyForecastContainer}>
            <HourlyForecastList
              hourlyData={hourlyData.hourlyWeatherData.hourlyWeather[index]}
              temperatureUnit={settings.temperatureUnit}
            />
          </View>
        </LinearGradient>
      </View>
    ));
    return (
      <Swiper showsPagination={false}>
        {pages}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height
  }, header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, date: {
    paddingTop: (statusBarHeight + 10),
    paddingLeft: 20,
    width: 100
  }, dateText: {
    color: '#FFF',
    fontSize: 16,
  }, settingsButton: {
    paddingTop: (statusBarHeight + 10),
    paddingRight: 20,
  }, hourlyForecastContainer: {
    paddingHorizontal: 10
  }
});

// Blue: ['#89AFFF', '#000']
// Purple: ['#800080', '#000']
// TextColor: '#FFF