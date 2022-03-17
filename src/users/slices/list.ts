import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [
        {name: 'Mihai'},
        {name: 'Mihai'},
        {name: 'Daniel'},
    ]
}

const add = (state: any, action: any): any => ({data: [...state.data, action.payload]})

export const list = createSlice({
    initialState,
    name: 'users/list',
    reducers: {
        add,
    }
})