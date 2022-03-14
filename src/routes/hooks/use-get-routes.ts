import { useCallback } from 'react'
import { get } from 'src/routes/slices'
import { useDispatch } from 'react-redux'

const defaultParams = {
  AB_SAYT_ports: 'false',
  OtherPortSearchStr: '',
  legType: '1',
  cult: 'en-US',
  AB_user_iso_pop_route: 'False',
  userIso: 'RO',
  stdc: 'DF10COM',
  opname: '',
  country: '',
  port_from: '',
  port_to: '',
  baseData: '',
  callback: '',
}

const makePayload = (term: string) => ({
  SearchTerm: term,
  ...defaultParams,
})

export const useGetRoutes = () => {
  const dispatch = useDispatch()

  return useCallback(term => {
    dispatch(get.actions.attempt(makePayload(term)))
  }, [dispatch])
}
