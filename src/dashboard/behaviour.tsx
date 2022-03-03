import { get, base } from 'dealfinder/hooks'
import { ReactElement } from 'react'

export const Behaviour = (): ReactElement => {
  get.useFetch()
  base.useFetch()

  return '' as unknown as ReactElement
}
