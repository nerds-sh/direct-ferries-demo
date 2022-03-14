import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { base } from 'src/deals/slices'

const makePayload = () => ({ stdc: 'DF10' })

export const useFetch = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(base.actions.attempt(makePayload()))
  }, [dispatch])
}
