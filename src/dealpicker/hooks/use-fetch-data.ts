import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getting } from 'dealpicker/slices'

const makePayload = () => ({
  journeyType: 2,
  routeId: 97,
  routeIdReturn: 98,
  cult: 'en-US',
  stdc: 'DF10COM',
  miniCruise: false,
  baseData: null,
  callback: null,
})

export const useFetchData = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getting.attempt(makePayload()))
  }, [dispatch])
}
