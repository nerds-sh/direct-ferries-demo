import { Modal } from 'src/details/types'
import { useContext } from 'src/details/context'

export const usePersonCount = (kind: Modal) => {
  const { values } = useContext()

  return kind === Modal.Children ? values.children : values.adults
}
