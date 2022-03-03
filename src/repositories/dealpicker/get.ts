import { settings } from 'settings'
import { fromFetch } from 'rxjs/fetch'
import { from, mergeMap, map } from 'rxjs'

const url = () => `${settings().api}/ferry/ws/dealpicker.asmx/RouteDataGet`

const append = (params: URLSearchParams) => ([key, value]: [string, unknown]) => params.append(key, `${value}`)

const body = (payload: object) => {
  const params = new URLSearchParams()

  Object.entries(payload).forEach(append(params))

  return params.toString()
}

const options = (payload: object) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: body(payload),
})

export const get = (payload: object) => fromFetch(url(), options(payload))
  .pipe(mergeMap(response => from(response.text())))
  .pipe(map(response => response.split('null(')[1].slice(0, -2)))
  .pipe(map(response => JSON.parse(response)))
