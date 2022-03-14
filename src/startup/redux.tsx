import React from 'react'
import * as core from 'src/core'
import { Provider } from 'react-redux'
import { store } from 'src/startup/store'

type Props = { children: core.types.Children }

export const Redux = ({ children }: Props) => <Provider store={store()}>
  {children}
</Provider>
