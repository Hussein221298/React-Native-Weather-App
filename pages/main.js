import { StyleSheet, Text, View, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WeatherDisplay from '../components/weather-display';
import HourlyForecastList from '../components/hourly-forecast-list';
import { dailyDataRequested, dailyDataFailed, getDailyWeather } from '../store/daily-weather'
import { hourlyDataRequested, hourlyDataFailed, getHourlyWeather } from '../store/hourly-weather'
import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import currentTemperature from '../utils/current-temperature'
import averageTemperature from '../utils/average-temperature'
import isToday from '../utils/is-today'
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import formatDate from '../utils/format-date';
import isDay from '../utils/is-day';
import Loading from './loading';
import ErrorPage from './error';
import { ThemeContext } from './../theme-context';

const { height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

const fetchTemperatureDate = ({ dispatch, settings }) => {
  dispatch({
    type: 'apiRequest',
    payload: {
      url: `https://api.open-meteo.com/v1/forecast?latitude=${+settings.city.latitude}&longitude=${settings.city.longitude}&past_days=2&timezone=${settings.city.timezone}&temperature_unit=${settings.temperatureUnit.name}&daily=weathercode,temperature_2m_max,temperature_2m_min`,
      method: 'GET',
      onStart: dailyDataRequested().type,
      onSuccess: getDailyWeather().type,
      onError: dailyDataFailed().type
    }
  });
  dispatch({
    type: 'apiRequest',
    payload: {
      url: `https://api.open-meteo.com/v1/forecast?latitude=${+settings.city.latitude}&longitude=${settings.city.longitude}&past_days=2&timezone=${settings.city.timezone}&temperature_unit=${settings.temperatureUnit.name}&hourly=temperature_2m,weathercode,is_day`,
      method: 'GET',
      onStart: hourlyDataRequested().type,
      onSuccess: getHourlyWeather().type,
      onError: hourlyDataFailed().type
    }
  });
}

export default MainPage = ({ navigation }) => {
  const navigationProps = useNavigation();
  const theme = useContext(ThemeContext);

  const refresh = () => {
    fetchTemperatureDate({ dispatch, settings });
  }

  const dispatch = useDispatch();
  const { settings, dailyData, hourlyData } = useSelector(state => state);
  useEffect(() => {
    fetchTemperatureDate({ dispatch, settings });
    navigationProps.setOptions({
      headerShown: false
    });
  } ,[settings]);

  if (dailyData.error || hourlyData.error) {
    return <ErrorPage 
      dailyDataErrorMessage={dailyData.errorMessage}
      hourlyDataErrorMessage={hourlyData.errorMessage} 
      onRefresh={refresh}
    />;
  } else if (dailyData.loading || hourlyData.loading) {
    return <Loading />;
  } else if (dailyData.initialFetch && hourlyData.initialFetch) {
    let pages = dailyData.dailyWeatherData.dailyWeather.map((dailyDataItem, index) => (
      <View style={styles.container} key={index}>
        <LinearGradient colors={isDay(hourlyData.hourlyWeatherData.hourlyWeather[index]) ? theme.dayModeBackground: theme.nightModeBackground} >
          <View style={styles.header}>
            <View style={styles.date} >
              {isToday(dailyDataItem.date) && <Text style={styles.dateText(theme)}>Today</Text>}
              <Text style={styles.dateText(theme)} >{formatDate(dailyDataItem.date)}</Text>
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
            currentTemperature={ isToday(dailyDataItem.date) ? currentTemperature(hourlyData.hourlyWeatherData.hourlyWeather[index]):
              averageTemperature(hourlyData.hourlyWeatherData.hourlyWeather[index])
            }
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
      <Swiper showsPagination={false} index={2}>
        {pages}
      </Swiper>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height
  }, header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: (statusBarHeight + 40)
  }, date: {
    paddingTop: (statusBarHeight + 10),
    paddingLeft: 20,
  }, dateText: (theme) => ({
    color: theme.textColor,
    fontSize: 16,
  }), settingsButton: {
    paddingTop: (statusBarHeight + 10),
    paddingRight: 20,
  }, hourlyForecastContainer: {
    paddingHorizontal: 10
  }
});
