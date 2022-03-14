import React from 'react'
import { Types } from 'core'
import { store } from 'startup/store'
import { Provider } from 'react-redux'

export const ReduxWrapper = ({ children }: {children: Types.Children}) => <Provider store={store()}>
  {children}
</Provider>
