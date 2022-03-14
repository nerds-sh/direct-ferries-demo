import { Types } from 'dealfinder'
import { Settings } from 'settings'
import { fromFetch } from 'rxjs/fetch'
import { from, map, mergeMap } from 'rxjs'

const url = ({ stdc }: Types.Base.Input) => `${Settings.get().api}/partners/dealFinderBaseData.aspx?stdc=${stdc}`

const options = () => ({
  method: 'POST',
  headers: { 'Content-Type': 'text/xml' },
})

export const base = (payload: Types.Base.Input) => fromFetch(url(payload), options())
  .pipe(mergeMap(response => from(response.text())))
  .pipe(map(response => response.slice(1, -2)))
  .pipe(map(response => JSON.parse(response)))
