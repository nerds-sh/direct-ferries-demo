import { settings } from 'settings'
import { fromFetch } from 'rxjs/fetch'
import { from, mergeMap, map, filter, toArray } from 'rxjs'
import { bodyFromParams } from 'repositories/common'
import lodash from 'lodash'

const url = () => `${settings().api}/ferry/ws/dealpicker.asmx/SearchDataGetAB`

const options = (payload: object) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: bodyFromParams(payload),
})

const isValidRoute = (response: unknown) => !!lodash.get(response, 'routeId', 0)

export const get = (payload: object) => fromFetch(url(), options(payload))
  .pipe(mergeMap(response => from(response.text())))
  .pipe(map(response => response.slice(1, -2)))
  .pipe(mergeMap(response => JSON.parse(response)))
  .pipe(filter(isValidRoute))
  .pipe(toArray())
