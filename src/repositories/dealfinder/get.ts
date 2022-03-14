import { fromFetch } from 'rxjs/fetch'
import { Settings } from 'src/settings'
import { from, mergeMap, map } from 'rxjs'
import { bodyFromParams } from 'src/repositories/common'

const url = () => `${Settings.get().api}/ferry/ws/dealpicker.asmx/RouteDataGet`

const options = (payload: object) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: bodyFromParams(payload),
})

export const get = (payload: object) => fromFetch(url(), options(payload))
  .pipe(mergeMap(response => from(response.text())))
  .pipe(map(response => response.split('null(')[1].slice(0, -2)))
  .pipe(map(response => JSON.parse(response)))
