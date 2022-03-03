import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { base } from 'dealfinder/slices'

const makePayload = () => ({ stdc: 'DF10' })

export const useFetch = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(base.actions.attempt(makePayload()))
  }, [dispatch])
}
