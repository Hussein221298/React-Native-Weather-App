import { configureStore } from "@reduxjs/toolkit";
import reducer from "./weather"
import logger from "redux-logger";
import error from "./middleware/error"
import api from "./middleware/api"

const store = configureStore({ 
    reducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger, api, error]
});

export default store; 
