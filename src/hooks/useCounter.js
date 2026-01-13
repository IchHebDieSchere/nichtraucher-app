import { useState } from 'react'

const useCounter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prev => {
      if (prev === 10) return 0
      return prev + 1
    })
  }

  return { count, increment }
}

export default useCounter
