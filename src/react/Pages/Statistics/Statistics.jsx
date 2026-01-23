import React from 'react'

import { Stack, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router'
import useWidgetAdded from '../../../hooks/useWidgetAdded'

const Statistics = ({ stats }) => {
  const { isWidgetAdded, markWidgetAdded } = useWidgetAdded()
  const navigate = useNavigate()

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
        <div><b>Rauchverlangen unterdrückt:</b> {stats.cravings}</div>
        <div><b>Rauchfreie Tage:</b> {stats.smokeFreeDays}</div>
        <div><b>Abgeschlossene Missionen:</b> {stats.missions}</div>
      </Box>
      {!isWidgetAdded && ( // temporär
        <Button
          variant="contained"
          onClick={() => {
            navigate('/screen4')
            markWidgetAdded()
          }} // mit screen von patty replacen
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
