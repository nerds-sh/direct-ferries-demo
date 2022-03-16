import { useSearchParams } from 'react-router-dom'

export const useRouteIds = () => {
  const [search] = useSearchParams()

  return {
    rfid: search.get('routeId') || '',
    rfidr: search.get('routeIdRet') || '',
  }
}
