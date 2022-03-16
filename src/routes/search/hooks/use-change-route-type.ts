import { get } from 'lodash'
import { Search } from 'src/routes/search'
import React, { useCallback } from 'react'

type Callback = (event: React.ChangeEvent) => void

export const useChangeRouteType = (): Callback => {
  const { setRouteType } = Search.useContext()

  return useCallback((event: React.ChangeEvent) => {
    const value = get(event, 'currentTarget.value', '')
    setRouteType(value)
  }, [setRouteType])
}
