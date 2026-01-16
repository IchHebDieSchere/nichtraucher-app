import React from 'react'

import { Stack, Box, Button } from '@mui/material'

import useNavigation from '../../../hooks/useNavigation'

const Statistics = ({ stats }) => {
  const isWidgetAdded = false // temporär
  const routeTo = useNavigation()

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
          onClick={() => routeTo('/menu')}
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
        onClick={() => routeTo('/boxBreathing')}
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
