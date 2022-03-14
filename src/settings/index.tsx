import React from 'react'
import { Types } from 'settings/types'
import { get, setup } from 'settings/fetching'
import { useFetching } from 'settings/hooks/use-fetching'

export const Settings = ({ children }: Types.Props): any => {
  const wereFetched = useFetching()

  return wereFetched ? children : <div />
}

Settings.setup = setup
Settings.get = get
