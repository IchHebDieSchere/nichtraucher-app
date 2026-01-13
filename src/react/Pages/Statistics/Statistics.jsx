import React from 'react'

import { Stack, Box, Button } from '@mui/material'

const Statistics = () => {
  const isWidgetAdded = false

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
        <div><b>Rauchverlangen unterdrückt:</b></div>
        <div><b>Rauchfreie Tage:</b></div>
        <div><b>Abgeschlossene Missionen:</b></div>
      </Box>
      {!isWidgetAdded && (
        <Button
          variant="contained"
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
