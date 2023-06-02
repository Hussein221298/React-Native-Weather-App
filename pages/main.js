import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
import WeatherDisplay from '../components/weather-display';
import HourlyForecastList from '../components/hourly-forecast-list';
import { dailyDataRequested, dailyDataFailed, getDailyWeather } from '../store/daily-weather'
import { hourlyDataRequested, hourlyDataFailed, getHourlyWeather } from '../store/hourly-weather'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import getCurrentTemperature from '../utils/current-temperature'
import Swiper from 'react-native-swiper';

const { height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

export default function MainPage() {
  const dispatch = useDispatch();
  const { dailyData, hourlyData } = useSelector(state => state);
  useEffect(() => {
    dispatch({
      type: 'apiRequest',
      payload: {
        url: "https://api.open-meteo.com/v1/forecast?latitude=33.89&longitude=35.50&past_days=2&timezone=EET&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min",
        method: "GET",
        onStart: dailyDataRequested().type,
        onSuccess: getDailyWeather().type,
        onError: dailyDataFailed().type
      }
    });
    dispatch({
      type: 'apiRequest',
      payload: {
        url: "https://api.open-meteo.com/v1/forecast?latitude=33.89&longitude=35.50&past_days=2&timezone=EET&hourly=temperature_2m,weathercode,is_day",
        method: "GET",
        onStart: hourlyDataRequested().type,
        onSuccess: getHourlyWeather().type,
        onError: hourlyDataFailed().type
      }
    });
  } ,[]);

  if (dailyData.error || hourlyData.error) {
    return <View><Text>ERROR</Text></View>;
  } else if (dailyData.loading || hourlyData.loading) {
    return <View><Text>...Loading</Text></View>;
  } else if (dailyData.initialFetch && hourlyData.initialFetch) {
    let pages = dailyData.dailyWeatherData.dailyWeather.map((dailyDataItem, index) => (
      <View style={styles.container} key={index}>
        <LinearGradient colors={['#89AFFF', '#000']} >
          <WeatherDisplay
            style={ styles.weatherDisplay } 
            weather={dailyDataItem}
            temperatureUnit={dailyData.dailyWeatherData.metaInfo.temperatureUnit}
            currentTemperature={getCurrentTemperature(hourlyData.hourlyWeatherData.hourlyWeather[index])}
            city='Beirut'
          />
          <HourlyForecastList
            hourlyData={hourlyData.hourlyWeatherData.hourlyWeather[index]}
          />
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
    height: (height + statusBarHeight),
  }
});

// purple ['#512F81', '#800080']