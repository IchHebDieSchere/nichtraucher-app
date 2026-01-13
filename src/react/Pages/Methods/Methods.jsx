import React from 'react'

import { Stack, Box, ToggleButtonGroup, ToggleButton, Button } from '@mui/material'

const Methods = () => {
  const isWidgetAdded = false

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={1}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        //onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="statistik">Statistik</ToggleButton>
        <ToggleButton value="methoden">Methoden</ToggleButton>
      </ToggleButtonGroup>
      <Box
        sx={{
          width: 360,
          height: 360,
          borderRadius: 3,
          border: '1px solid',
          p: 1
        }}
      >
        Lorem ipsum Methoden
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

export default Methods
