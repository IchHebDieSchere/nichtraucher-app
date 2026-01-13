import React from 'react'

import { Stack, ToggleButtonGroup, ToggleButton } from '@mui/material'

import Statistics from '../Statistics/Statistics'
import Methods from '../Methods/Methods'

const MainMenu = () => {
  // tab wird === statistik gesetzt
  const [tab, setTab] = React.useState('statistik')

  // function für tab change
  const handleTabChange = (event, newTab) => {
    if (newTab !== null) setTab(newTab)
  }

  return (
    <Stack alignItems="center" spacing={2}>
      <ToggleButtonGroup value={tab} exclusive onChange={handleTabChange}>
        <ToggleButton value="statistik">Statistik</ToggleButton>
        <ToggleButton value="methoden">Methoden</ToggleButton>
      </ToggleButtonGroup>

      {tab === 'statistik' && <Statistics />}
      {tab === 'methoden' && <Methods />}

    </Stack>
  )
}

export default MainMenu
