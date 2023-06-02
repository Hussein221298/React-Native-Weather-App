import { createSlice } from "@reduxjs/toolkit"
 
const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    city: {
      label: "Beirut",
      latitude: 33.89332,
      longitude: 35.50157,
      timezone: "Asia/Beirut",
      value: 276781,
    },
    temperatureUnit: {
      name: 'celsius',
      symbol: '\u2103'
    } 
  },
  reducers: {
    saveSettings: (state, action) => {
      state.temperatureUnit = action.payload.temperatureUnit;
      if (action.payload.city) state.city = action.payload.city;
    }
  }
});

export const { saveSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
