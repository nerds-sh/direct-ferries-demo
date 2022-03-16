import { useContext } from 'src/details/context'

export const useCloseDisabled = () => {
  const { errors } = useContext()

  return errors.adults || errors.children
}
