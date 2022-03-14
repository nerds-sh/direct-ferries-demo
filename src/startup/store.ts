import { epic } from 'src/startup/epic'
import { reducer } from 'src/startup/reducer'
import { createEpicMiddleware } from 'redux-observable'
import { configureStore, Store } from '@reduxjs/toolkit'

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
