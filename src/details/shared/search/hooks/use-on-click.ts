import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { useSearchValue } from 'details/shared/search/hooks/use-search-value'

export const useOnClick = () => {
  const navigate = useNavigate()
  const value = useSearchValue()

  return useCallback(() => {
    navigate({ pathname: '/', search: `term=${value}` })
  }, [navigate, value])
}
