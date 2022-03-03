import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getting } from 'dealpicker/slices'

export const useFetchData = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getting.attempt({}))
  }, [dispatch])
}
