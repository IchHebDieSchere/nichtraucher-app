const storageKey = 'stats'

const defaultStats = {
  missions: 0,
  cravings: 0,
  smokeFreeDays: 0
}

export const loadStats = () => {
  const storedValue = localStorage.getItem(storageKey)

  if (storedValue !== null) {
    return JSON.parse(storedValue)
  } return defaultStats
}

export const saveStats = (stats) => {
  localStorage.setItem(storageKey, JSON.stringify(stats))
}
