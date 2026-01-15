import React from 'react'

import { Stack, ToggleButtonGroup, ToggleButton } from '@mui/material'

import Statistics from '../Statistics/Statistics'
import Methods from '../Methods/Methods'
import { loadStats, saveStats } from '../../../hooks/useStats'

const MainMenu = () => {
  const [tab, setTab] = React.useState('statistik')
  const [stats, setStats] = React.useState(loadStats)

  const handleTabChange = (event, newTab) => {
    if (newTab !== null) setTab(newTab)
  }

  React.useEffect(() => {
    saveStats(stats)
  }, [stats])

  return (
    <Stack alignItems="center" spacing={2}>
      <ToggleButtonGroup value={tab} exclusive onChange={handleTabChange}>
        <ToggleButton value="statistik">Statistik</ToggleButton>
        <ToggleButton value="methoden">Methoden</ToggleButton>
      </ToggleButtonGroup>

      {tab === 'statistik' && (
        <Statistics stats={stats} setStats={setStats} />
      )}
      {tab === 'methoden' && <Methods />}

    </Stack>
  )
}

export default MainMenu
