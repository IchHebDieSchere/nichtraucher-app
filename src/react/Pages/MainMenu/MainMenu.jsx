import React, { useEffect, useState } from 'react'

import { Stack, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material'

import Statistics from '../Statistics/Statistics'
import Methods from '../Methods/Methods'
import useStats from '../../../hooks/useStats'
import useMainMenuTab from '../../../hooks/useMainMenuTab'
import useMethods from '../../../hooks/useMethods'

const STORAGE_KEY = 'userName'

const MainMenu = () => {
  const { tab, handleTabChange } = useMainMenuTab('statistik')
  const { stats, setStats, incrementMission } = useStats()
  const { selectedMethod, setSelectedMethod } = useMethods()

  const [username, setUsername] = useState('')

  useEffect(() => {
    const savedName = localStorage.getItem(STORAGE_KEY)
    if (savedName) {
      setUsername(savedName)
    }
  }, [])

  return (
    <Stack alignItems="center" spacing={7}>
      <ToggleButtonGroup value={tab} exclusive onChange={handleTabChange}>
        <ToggleButton value="statistik">Statistics</ToggleButton>
        <ToggleButton value="methoden">Methods</ToggleButton>
      </ToggleButtonGroup>

      <Typography variant="h5">
        Hello, {username}!
      </Typography>


      {tab === 'statistik' && (
        <Statistics stats={stats} setStats={setStats} incrementMission={incrementMission} selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />
      )}
      {tab === 'methoden' && (
        <Methods selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />
      )}

    </Stack>
  )
}

export default MainMenu
