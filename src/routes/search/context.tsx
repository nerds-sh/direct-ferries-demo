import React, { useState } from 'react'

type Value = {
  inputReference: any,
  routeType: any,
  setRouteType: any,
}

export const Context: any = React.createContext({})

export const useContext = (): Value => React.useContext(Context)

export const useValue = (): Value => {
  const [routeType, setRouteType] = useState('1')
  const inputReference = React.useRef<HTMLInputElement>()

  return { inputReference, routeType, setRouteType }
}
