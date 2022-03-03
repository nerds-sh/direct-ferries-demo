import { settings } from 'settings'
import { fromFetch } from 'rxjs/fetch'
import { from, mergeMap, map } from 'rxjs'

const url = () => `${settings().api}/ferry/ws/dealpicker.asmx/RouteDataGet`

const body = 'journeyType=2&routeId=97&routeIdReturn=98&cult=en-US&stdc=DF10COM&miniCruise=false&baseData=null&callback=null'

const options = () => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body,
})

export const get = () => fromFetch(url(), options())
  .pipe(mergeMap(response => from(response.text())))
  .pipe(map(response => response.split('null(')[1].slice(0, -2)))
  .pipe(map(response => JSON.parse(response)))
