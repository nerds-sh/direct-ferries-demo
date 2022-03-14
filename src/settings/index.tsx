import React from 'react'
import { Types } from 'src/settings/types'
import { get, setup } from 'src/settings/fetching'
import { useFetching } from 'src/settings/hooks/use-fetching'

export const Settings = ({ children }: Types.Props): any => {
  const wereFetched = useFetching()

  return wereFetched ? children : <div />
}

Settings.setup = setup
Settings.get = get
