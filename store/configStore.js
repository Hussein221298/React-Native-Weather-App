import { configureStore } from "@reduxjs/toolkit";
import dailyReducer from "./daily-weather"
import hourlyReducer from "./hourly-weather"
import error from "./middleware/error"
import api from "./middleware/api"
import logger from "redux-logger";

const store = configureStore({ 
    reducer: {
        dailyData: dailyReducer,
        hourlyData: hourlyReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, error]
});

export default store; 
