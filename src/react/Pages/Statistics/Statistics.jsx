import React from 'react'

import { Stack, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router'

const Statistics = ({ stats }) => {
  const isWidgetAdded = false // temporär
  const routeTo = useNavigate()

  // Welche Methode wurde wie häufig benutzt?
  // Bewertungen

  return (
    <Stack alignItems="center" justifyContent="center" spacing={1}>
      <Box
        sx={{
          width: 360,
          height: 360,
          borderRadius: 3,
          border: '1px solid',
          p: 1
        }}
      >
        <div><b>Cravings suppressed:</b> {stats.cravings}</div>
        <div><b>Smoke free days:</b> {stats.smokeFreeDays}</div>
        <div><b>Missions completed:</b> {stats.missions}</div>
      </Box>

      {!isWidgetAdded && (
        <Button
          variant="contained"
          onClick={() => routeTo('/menu')}
          sx={{ bgcolor: '#989595', zIndex: 100 }}
        >
          Widget
        </Button>
      )}

      <Button
        variant="contained"
        onClick={() => routeTo('/boxBreathing')}
        sx={{ bgcolor: '#fc0303', color: '#fff', zIndex: 99 }}
      >
        Emergency
      </Button>
    </Stack>
  )
}

export default Statistics
