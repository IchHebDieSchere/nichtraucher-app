import { useEffect, useState } from 'react'

const defaultStats = {
  missions: 0,
  cravings: 0,
  smokeFreeDays: 0
}

export default function useStats() {
  const [stats, setStats] = useState(defaultStats)

  // use effect = findet nach render statt
  useEffect(() => {
    const stored = localStorage.getItem('stats')
    if (stored) {
      setStats(JSON.parse(stored))
    }
  }, []) // deps leer = useEffect wird nur einmal aufgerufen (bei [tab] bei jedem tab wechsel)

  return { stats, setStats }
}
