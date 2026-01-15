import { useEffect, useState } from 'react'

const initialState = {
  minigame: true,
  breating: true,
  facts: true
}

export default function useMethods() {
  const [methods, setMethods] = useState(initialState)

  useEffect(() => {
    const stored = localStorage.getItem('methods')
    if (stored) {
      setMethods(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('methods', JSON.stringify(methods))
  }, [methods])

  return { methods, setMethods }
}
