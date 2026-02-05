import React from 'react'

import { Stack, ToggleButtonGroup, ToggleButton } from '@mui/material'

import Statistics from '../Statistics/Statistics'
import Methods from '../Methods/Methods'
import useStats from '../../../hooks/useStats'
import useMainMenuTab from '../../../hooks/useMainMenuTab'
import useMethods from '../../../hooks/useMethods'

const MainMenu = () => {
  const { tab, handleTabChange } = useMainMenuTab('statistik')
  const { stats, setStats, incrementMission } = useStats()
  const { selectedMethod, setSelectedMethod } = useMethods()

  return (
    <Stack alignItems="center" spacing={10}>
      <ToggleButtonGroup value={tab} exclusive onChange={handleTabChange}>
        <ToggleButton value="statistik">Statistics</ToggleButton>
        <ToggleButton value="methoden">Methods</ToggleButton>
      </ToggleButtonGroup>

      {tab === 'statistik' && (
        <Statistics stats={stats} setStats={setStats} incrementMission={incrementMission} />
      )}
      {tab === 'methoden' && (
        <Methods selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />
      )}

    </Stack>
  )
}

export default MainMenu
