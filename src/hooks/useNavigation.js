import { useNavigate } from 'react-router-dom'

export default function useNavigation() {
  const navigate = useNavigate()

  const routeTo = (route) => {
    navigate(route)
  }
  return routeTo
}
