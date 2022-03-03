import React from 'react'
import { Types } from 'common'
import { useFetching } from 'settings/hooks/use-fetching'

export const Wrapper = ({ children }: {children: Types.Children }): any => {
  const wereFetched = useFetching()

  return wereFetched ? children : <div />
}
