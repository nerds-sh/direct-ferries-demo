import { combineReducers } from "@reduxjs/toolkit";
import { list } from "./slices";

export const reducer = combineReducers({
    list: list.reducer
})