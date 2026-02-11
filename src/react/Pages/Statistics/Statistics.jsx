import React from 'react'

import { Stack, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router'

const emergencyRoutes = {
  game: '/minigame',
  breathing: '/boxBreathing',
  facts: '/facts'
}

const Statistics = ({ stats, selectedMethod, setSelectedMethod }) => {
  const routeTo = useNavigate()

  return (
    <Stack alignItems="center" justifyContent="center" spacing={2}>
      <Box
        sx={{
          width: 360,
          height: 360,
          borderRadius: 3,
          border: '1px solid',
          p: 1
        }}
      >
        <div>Cravings suppressed: {stats.cravings}</div>
        <div>Missions completed: {stats.missions}</div>
      </Box>

      <Button
        variant="contained"
        onClick={() => routeTo('/placement')}
        sx={{ bgcolor: '#989595', zIndex: 100 }}
      >
        Widget
      </Button>

      <Button
        variant="contained"
        onClick={() => {
          if (selectedMethod) {
            routeTo(emergencyRoutes[selectedMethod])
          }
        }}
        sx={{ bgcolor: '#fc0303', color: '#fff', zIndex: 99 }}
      >
        Emergency
      </Button>
    </Stack>
  )
}

export default Statistics
