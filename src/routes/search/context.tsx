import React from 'react'

type Value = {
  inputReference: React.MutableRefObject<HTMLInputElement | undefined>
}

export const Context: any = React.createContext({})

export const useContext = (): Value => React.useContext(Context)

export const useValue = (): Value => {
  const inputReference = React.useRef<HTMLInputElement>()

  return { inputReference }
}
