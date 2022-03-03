import React from 'react'
import { Children } from 'common/types'
import { useFetching } from 'settings/hooks/use-fetching'

export const Wrapper = ({ children }: {children: Children }): any => {
  const wereFetched = useFetching()

  return wereFetched ? children : <div />
}
