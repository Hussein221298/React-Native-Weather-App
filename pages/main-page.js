import { StyleSheet, Text, View, Button } from 'react-native';
import CurrentWeather from './../components/current-weather';
import HourlyForecastList from './../components/hourly-forecast-list';
import { getWeather , apiRequested, apiRequestFailed } from './../store/weather'
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function MainPage() {
  const dispatch = useDispatch();
  const { weather, loading } = useSelector(state => state);
  useEffect(() => {
    dispatch({
      type: 'apiRequest',
      payload: {
        URL: "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m",
        method: "GET",
        onStart: apiRequested().type,
        onSuccess: getWeather().type,
        onError: apiRequestFailed().type
      }
    });
  } ,[]);

  return (
    <View style={styles.currentWeather}>
      <CurrentWeather />
      <HourlyForecastList />
    </View>
  );
}

const styles = StyleSheet.create({
  currentWeather: {
    display: 'flex',
    alignItems: 'center',
  }, 
});