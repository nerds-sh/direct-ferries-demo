import { fromFetch } from 'rxjs/fetch'
import { mergeMap, from, Observable } from 'rxjs'
import { Settings } from 'settings/type'

const makeUrl = () => `/settings/${process.env.REACT_APP_NODE_ENV}.json`

export const fetch = (): Observable<Settings> => fromFetch(makeUrl())
  .pipe(mergeMap(response => from(response.json())))
