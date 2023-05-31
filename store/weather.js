import { createSlice } from "@reduxjs/toolkit"
import serializeData from './../adapters/serialize-data';
 
const weatherSlice = createSlice({
    name: "weather",
    initialState: {
      loading: false,
      weather: {},
      error: false,
    },
    reducers: {
      apiRequested: (state) => {
        state.loading = true;
      },
      apiRequestFailed: (state) => {
        state.loading = false;
        state.error = true;
      },
      getWeather: (state, action) => {
        state.weather = { ...action.payload };
        state.loading = false;
      }
    }
});

export const { getWeather, apiRequested, apiRequestFailed } = weatherSlice.actions;
export default weatherSlice.reducer;
