import { useEffect, useState } from 'react'

const STORAGE_KEY = 'selectedMethod'

export default function useMethods() {
  const [selectedMethod, setSelectedMethod] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) setSelectedMethod(stored)
  }, [])

  useEffect(() => {
    if (selectedMethod) {
      localStorage.setItem(STORAGE_KEY, selectedMethod)
    }
  }, [selectedMethod])

  return { selectedMethod, setSelectedMethod }
}
