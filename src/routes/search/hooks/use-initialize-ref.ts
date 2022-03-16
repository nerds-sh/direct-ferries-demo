import { Search } from 'src/routes/search'

type Callback = (ref: HTMLInputElement | null) => void

export const useInitializeRef = (): Callback => {
  const { inputReference } = Search.useContext()

  return (ref: any) => {
    inputReference.current = ref
  }
}
