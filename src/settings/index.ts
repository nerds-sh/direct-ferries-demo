import { Settings } from 'settings/type'
import { fetch } from 'settings/fetch'
import { tap } from 'rxjs'

let fetchedSettings: Settings

export const setup = () => fetch()
  .pipe(tap(values => { fetchedSettings = values }))

export const settings = (): Settings => {
  if (!fetchedSettings) {
    throw new Error('Settings not fetched yet')
  }

  return fetchedSettings
}

export { Wrapper as Settings } from 'settings/wrapper'
