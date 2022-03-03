import { Modal } from 'details/types'
import { useContext } from 'details/context'
import { useCallback } from 'react'

export const useOnItemClick = (kind: Modal) => {
  const { setModal } = useContext()

  return useCallback(() => {
    setModal(kind)
  }, [kind, setModal])
}
