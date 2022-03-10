import { useDispatch } from 'react-redux'
import { defaultRoutes } from 'routes/slices'
import { useEffect } from 'react'

const params = {
  SearchTerm: '',
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

export const useFetchDefaultRoutes = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(defaultRoutes.actions.attempt(params))
  }, [dispatch])
}
