import React from 'react'
import { Children } from 'common/types'
import { Provider } from 'react-redux'
import { store } from 'startup/store'

export const ReduxWrapper = ({ children }: {children: Children}) => <Provider store={store()}>
  {children}
</Provider>
