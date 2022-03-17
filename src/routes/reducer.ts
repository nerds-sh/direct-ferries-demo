import { combineReducers } from "@reduxjs/toolkit";
import { routes } from "./slices";

export const reducer = combineReducers({
    list: routes.reducer
})