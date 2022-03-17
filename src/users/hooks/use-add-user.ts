import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { list } from "../slices"

export const useAddUser = () => {
    const dispatch = useDispatch()

    return useCallback(({name}: {name: string}) => {
        dispatch(list.actions.add({name}))
    }, [dispatch]) 
}