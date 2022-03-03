import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

export const useOnClick = () => {
  const navigate = useNavigate()

  return useCallback(() => {
    navigate('/details')
  }, [navigate])
}
