import { useFetchData } from 'dashboard/hooks/use-fetch-data'
import { ReactElement } from 'react'

export const Behaviour = (): ReactElement => {
  useFetchData()

  return '' as unknown as ReactElement
}
