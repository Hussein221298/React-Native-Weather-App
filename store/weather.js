import { createSlice } from "@reduxjs/toolkit"
 

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
      loading: false,
      weather: {},
    },
    reducers: {
      apiRequested: (state) => {
        state.loading = true;
      },
      apiRequestFailed: (state) => {
        state.loading = false;
      },
      getWeather: (state, action) => {
        state.loading = false;
        state.weather = { ...action.payload };
      }
    }
});

export const { getWeather, apiRequested, apiRequestFailed } = weatherSlice.actions;
export default weatherSlice.reducer;
