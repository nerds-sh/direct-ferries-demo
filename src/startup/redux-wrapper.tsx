import React from 'react'
import { Types } from 'common'
import { Provider } from 'react-redux'
import { store } from 'startup/store'

export const ReduxWrapper = ({ children }: {children: Types.Children}) => <Provider store={store()}>
  {children}
</Provider>
