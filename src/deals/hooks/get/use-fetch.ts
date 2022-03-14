import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { get } from 'src/deals/slices'

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

export const useFetch = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get.actions.attempt(makePayload()))
  }, [dispatch])
}
