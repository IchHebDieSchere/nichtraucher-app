import { useEffect, useState } from 'react'

const key = 'widgetAdded'

export default function useWidgetAdded() {
  const [isWidgetAdded, setIsWidgetAdded] = useState(false)

  useEffect(() => {
    setIsWidgetAdded(localStorage.getItem(key) === 'true')
  }, [])

  const markWidgetAdded = () => {
    localStorage.setItem(key, 'true')
    setIsWidgetAdded(true)
  }

  const resetWidgetAdded = () => {
    localStorage.setItem(key, 'false')
    setIsWidgetAdded(true)
  }

  return { isWidgetAdded, markWidgetAdded, resetWidgetAdded }
}
