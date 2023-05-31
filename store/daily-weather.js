import { createSlice } from "@reduxjs/toolkit"
import serializeDailyData from './../adapters/serialize-daily-data';
 
const dailyWeatherSlice = createSlice({
  name: "dailyWeather",
  initialState: {
    loading: false,
    dailyWeatherData: {},
    error: false,
    initialFetch: false,
  },
  reducers: {
    dailyDataRequested: (state) => {
      state.loading = true;
    },
    dailyDataFailed: (state) => {
      state.loading = false;
      state.error = true;
    },
    getDailyWeather: (state, action) => {
      state.dailyWeatherData = serializeDailyData(action.payload) 
      state.loading = false;
      state.initialFetch = true;
    }
  }
});

export const { dailyDataRequested, dailyDataFailed, getDailyWeather } = dailyWeatherSlice.actions;
export default dailyWeatherSlice.reducer;
