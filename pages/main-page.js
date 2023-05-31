import { StyleSheet, Text, View } from 'react-native';
import WeatherDisplay from './../components/weather-display';
import HourlyForecastList from './../components/hourly-forecast-list';
import { getWeather , apiRequested, apiRequestFailed } from './../store/weather'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

export default function MainPage() {
  const dispatch = useDispatch();
  const { weather, loading, error } = useSelector(state => state);
  useEffect(() => {
    dispatch({
      type: 'apiRequest',
      payload: {
        url: "https://api.open-meteo.com/v1/forecast?latitude=33.89&longitude=35.50&past_days=2&timezone=EET&hourly=temperature_2m,weathercode,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min",
        method: "GET",
        onStart: apiRequested().type,
        onSuccess: getWeather().type,
        onError: apiRequestFailed().type
      }
    });
  } ,[]);
  
  let hourlyList = {};
  let currentWeather = {
    latitude: weather?.latitude,
    longitude: weather?.longitude,
    temperatureMax: weather?.daily?.temperature_2m_max[0],
    temperatureMin: weather?.daily?.temperature_2m_min[0],
    condition: weather?.daily?.weathercode[0],
    unit: weather?.daily_units?.temperature_2m_max
  }

  if (error) {
    return <View><Text>ERROR</Text></View>;
  } else if (loading) {
    return <View><Text>...Loading</Text></View>;
  } else {
    // console.log(weather)
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#89AFFF', '#FFF']}
          style={styles.gradient}
        >
          <WeatherDisplay style={ styles.weatherDisplay } weather={ currentWeather } />
          <HourlyForecastList hourlyList={ hourlyList }/>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
});

// purple ['#512F81', '#800080']