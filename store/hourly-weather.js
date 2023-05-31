import { createSlice } from "@reduxjs/toolkit"
import serializeHourlyData from './../adapters/serialize-hourly-data';
 
const hourlyWeatherSlice = createSlice({
  name: "hourlyWeather",
  initialState: {
    loading: false,
    hourlyWeatherData: {},
    error: false,
    initialFetch: false,
  },
  reducers: {
    hourlyDataRequested: (state) => {
      state.loading = true;
    },
    hourlyDataFailed: (state) => {
      state.loading = false;
      state.error = true;
    },
    getHourlyWeather: (state, action) => {
      state.hourlyWeatherData = serializeHourlyData(action.payload);
      state.loading = false;
      state.initialFetch = true;
    }
  }
});

export const { hourlyDataRequested, hourlyDataFailed, getHourlyWeather } = hourlyWeatherSlice.actions;
export default hourlyWeatherSlice.reducer;
