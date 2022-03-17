import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [
        {id: 1, name: 'Dover - Dunkirk'},
        {id: 2, name: 'Dover1 - Dunkirk'},
        {id: 3, name: 'Dover2 - Dunkirk'},
    ]
}

const idsMatch = (action: any) => ({id}: {id: number}) => id === action.payload.id

const add = (state: any, action: any): any => ({data: [...state.data, action.payload]})

const remove = (state: any, action: any): any => ({data: [...state.data.filter(idsMatch(action))]})

export const routes = createSlice({
    initialState,
    name: 'routes/list',
    reducers: {
        add,
        remove
    }
})