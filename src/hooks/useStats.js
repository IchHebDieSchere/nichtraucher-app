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

  const incrementMission = () => {
    setStats(prevState => ({
      ...prevState, missions: prevState.missions + 1 /// ... nimmt alle werte aus stats -> cravings, missions
    }))
  }

  const incrementCraving = () => {
    setStats(prevState => ({
      ...prevState, cravings: prevState.cravings + 1
    }))
  }

  return { stats, setStats, incrementMission, incrementCraving }
}
