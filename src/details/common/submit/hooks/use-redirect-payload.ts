import { Form } from 'src/details/types'
import { useContext } from 'src/details/context'
import { useRouteIds } from 'src/details/common/submit/hooks/use-route-ids'

const staticParams = {
  stdc: 'DF10COM',
  grid: '0',
  outd: '2022-04-25',
  outt: '9',
}

const isReturnTrip = (type: Form) => type === Form.Return

const stringify = (value: any) => `${value}`

export const useRedirectPayload = () => {
  const { type, values } = useContext()
  const routeIds = useRouteIds()

  return {
    ...staticParams,
    ...routeIds,
    psgr: stringify(values.adults + values.children),
    curr: stringify(values.currency),
    retn: stringify(isReturnTrip(type)),
    retd: stringify(isReturnTrip(type) ? '2022-04-26' : null),
    rett: stringify(isReturnTrip(type) ? '17' : -1),
  }
}
