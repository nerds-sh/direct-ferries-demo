import { map, tap } from 'rxjs'
import { Types } from 'src/settings/types'
import { fetch } from 'src/settings/repositories/fetch'

let fetchedSettings: Types.Settings

export const setup = () => fetch()
  .pipe(tap(values => { fetchedSettings = values }))
  .pipe(map(get))

export const get = (): Types.Settings => {
  if (!fetchedSettings) throw new Error('Settings not fetched yet')

  return fetchedSettings
}
