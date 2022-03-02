import { createEpicMiddleware } from 'redux-observable'
import { configureStore, Store } from '@reduxjs/toolkit'
import { reducer } from 'startup/reducer'
import { epic } from 'startup/epic'

let storeInstance: Store

const configureMiddleware = (middleware: any) => (getDefaultMiddleware: any) => getDefaultMiddleware()
  .concat(middleware)

const makeStoreConfiguration = (middleware: any) => ({
  middleware: configureMiddleware(middleware),
  reducer,
})

export const store = (): Store => {
  if (!storeInstance) {
    const middleware = createEpicMiddleware()
    storeInstance = configureStore(makeStoreConfiguration(middleware))
    middleware.run(epic)
  }

  return storeInstance
}
