import { createSlice } from "@reduxjs/toolkit"
import serializeDailyData from './../adapters/serialize-daily-data';
 
const dailyWeatherSlice = createSlice({
  name: "dailyWeather",
  initialState: {
    dailyWeatherData: {},
    loading: false,
    error: false,
    errorMessage: '',
    initialFetch: false,
  },
  reducers: {
    dailyDataRequested: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessage = ''
    },
    dailyDataFailed: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload.errorMessage
    },
    getDailyWeather: (state, action) => {
      state.dailyWeatherData = serializeDailyData(action.payload) 
      state.loading = false;
      state.initialFetch = true;
      state.error = false;
      state.errorMessage = ''
    }
  }
});

export const { dailyDataRequested, dailyDataFailed, getDailyWeather } = dailyWeatherSlice.actions;
export default dailyWeatherSlice.reducer;
