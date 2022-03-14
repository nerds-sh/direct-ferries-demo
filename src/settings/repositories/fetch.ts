import { fromFetch } from 'rxjs/fetch'
import { Types } from 'src/settings/types'
import { mergeMap, from, Observable, map } from 'rxjs'

const makeUrl = () => `/settings/${process.env.REACT_APP_NODE_ENV}.json`

export const fetch = (): Observable<Types.Settings> => fromFetch(makeUrl())
  .pipe(map(response => response.json()))
  .pipe(mergeMap(from))
