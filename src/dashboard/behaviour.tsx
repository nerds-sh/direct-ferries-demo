import { get, base } from 'dealpicker/hooks'
import { ReactElement } from 'react'

export const Behaviour = (): ReactElement => {
  get.useFetch()
  base.useFetch()

  return '' as unknown as ReactElement
}
