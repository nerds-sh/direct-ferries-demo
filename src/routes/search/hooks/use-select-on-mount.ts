import { useEffect } from 'react'
import { Search } from 'src/routes/search'

export const useSelectOnMount = () => {
  const { inputReference } = Search.useContext()

  useEffect(() => {
    if (inputReference.current) {
      inputReference.current.select()
    }
  }, [inputReference])
}
