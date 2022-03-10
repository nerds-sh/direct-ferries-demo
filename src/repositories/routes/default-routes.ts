import { settings } from 'settings'
import { fromFetch } from 'rxjs/fetch'
import { from, mergeMap, map } from 'rxjs'
import { bodyFromParams } from 'repositories/common'

const url = () => `${settings().api}/ferry/ws/dealpicker.asmx/SearchDataGetAB`

const options = (payload: object) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: bodyFromParams(payload),
})

export const get = (payload: object) => fromFetch(url(), options(payload))
  .pipe(mergeMap(response => from(response.text())))
  .pipe(map(response => response.split('null(')[1].slice(0, -2)))
  .pipe(map(response => JSON.parse(response)))
