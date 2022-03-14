import { useCallback } from 'react'
import { Modal } from 'src/details/types'
import { useContext } from 'src/details/context'

export const useOnItemClick = (kind: Modal) => {
  const { setModal } = useContext()

  return useCallback(() => {
    setModal(kind)
  }, [kind, setModal])
}
