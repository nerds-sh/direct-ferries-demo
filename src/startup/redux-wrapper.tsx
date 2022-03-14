import React from 'react'
import * as core from 'core'
import { store } from 'startup/store'
import { Provider } from 'react-redux'

type Props = { children: core.types.Children }

export const ReduxWrapper = ({ children }: Props) => <Provider store={store()}>
  {children}
</Provider>
