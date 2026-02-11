import { useEffect, useState } from 'react'

const defaultStats = {
  cravings: 0,
  missions: 0
}

// local storage implementieren

export default function useStats() {
  const [stats, setStats] = useState(defaultStats)

  // use effect = findet nach render statt
  useEffect(() => {
    const stored = localStorage.getItem('stats')
    if (stored) {
      setStats(JSON.parse(stored))
    }
  }, []) // deps leer = useEffect wird nur einmal aufgerufen (bei [tab] bei jedem tab wechsel)

  useEffect(() => {
    localStorage.setItem('stats', JSON.stringify(stats))
  }, [stats])

  const incrementMission = () => {
    setStats(prev => {
      const next = { ...prev, missions: prev.missions + 1 }
      localStorage.setItem('stats', JSON.stringify(next))
      return next
    })
  }

  const incrementCraving = () => {
    setStats(prev => {
      const next = { ...prev, cravings: prev.cravings + 1 }
      localStorage.setItem('stats', JSON.stringify(next))
      return next
    })
  }

  return { stats, setStats, incrementMission, incrementCraving }
}
