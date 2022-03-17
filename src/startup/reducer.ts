import { combineReducers } from "@reduxjs/toolkit";
import {reducer as routes} from 'src/routes/reducer'
import {reducer as users} from 'src/users/reducer'

export const reducer = combineReducers({
    routes,
    users,
})