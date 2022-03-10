import React, { useEffect } from 'react'

type Ref = React.MutableRefObject<HTMLInputElement | undefined>

export const useSelectOnMount = (ref: Ref) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.select()
    }
  }, [ref])
}
