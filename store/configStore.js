import { configureStore } from "@reduxjs/toolkit";
import reducer from "./weather"
import logger from "redux-logger";
import error from "./middleware/error"
import serializeWeather from "./middleware/serialize-weather"
import api from "./middleware/api"

const store = configureStore({ 
    reducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, error]
});

export default store; 
