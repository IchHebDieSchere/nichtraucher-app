import React from 'react'

import { Stack, ToggleButtonGroup, ToggleButton } from '@mui/material'

import Statistics from '../Statistics/Statistics'
import Methods from '../Methods/Methods'
import useStats from '../../../hooks/useStats'
import useMainMenuTab from '../../../hooks/useMainMenuTab'

const MainMenu = () => {
  const { tab, handleTabChange } = useMainMenuTab('statistik')
  const { stats, setStats } = useStats()

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
