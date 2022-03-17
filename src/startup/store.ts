import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "./reducer"

let instance: any

export const store = (): any => {
    if (!instance) {
        instance = configureStore({reducer})
    }

    return instance
}