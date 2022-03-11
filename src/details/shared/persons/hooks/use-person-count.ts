import { Modal } from 'details/types'
import { useContext } from 'details/context'

export const usePersonCount = (kind: Modal) => {
  const { values } = useContext()

  return kind === Modal.Children ? values.children : values.adults
}
