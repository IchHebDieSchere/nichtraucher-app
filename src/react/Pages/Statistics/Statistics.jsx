import React from 'react'

import { Stack, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router'
import useWidgetAdded from '../../../hooks/useWidgetAdded'

// https://mui.com/x/react-charts/ für statistiken

const Statistics = ({ stats, incrementMission }) => {
  const { isWidgetAdded, markWidgetAdded } = useWidgetAdded()
  const navigate = useNavigate()
  const { cravings, smokeFreeDays, missions } = stats

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={1}
    >
      <Box
        sx={{
          width: 360,
          height: 360,
          borderRadius: 3,
          border: '1px solid',
          p: 1
        }}
      >
        <div>
          <b>Rauchverlangen unterdrückt: </b>
          {cravings}
        </div>
        <div>
          <b>Rauchfreie Tage: </b>
          {smokeFreeDays}
        </div>
        <div>
          <b>Abgeschlossene Missionen: </b>
          {missions}
        </div>
      </Box>
      {!isWidgetAdded && (
        <Button
          variant="contained"
          onClick={() => {
            // navigate('/screen4') // mit screen von patty replacen
            // markWidgetAdded()
            incrementMission()
          }}
          sx={{
            bgcolor: '#989595',
            zIndex: 100
          }}
        >
          Widget
        </Button>
      )}

      <Button
        variant="contained"
        onClick={() => navigate('/boxBreathing')}
        sx={{
          bgcolor: '#fc0303',
          color: 'fff',
          zIndex: 99
        }}
      >
        Notfall
      </Button>
    </Stack>
  )
}

export default Statistics
