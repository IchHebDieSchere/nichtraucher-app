import React from 'react'

import { Stack, ButtonGroup, Button } from '@mui/material'
import { Box } from '@mui/system'

const Statistics = () => (
  <Stack
    spacing={3}
    flex="1 1 auto"
    justifyContent="center"
    alignItems="center"
  >
    <ButtonGroup
      variant="outlined"
      aria-label="Basic button group"
      sx={{
        position: 'fixed',
        top: 140,
        zIndex: 100
      }}
    >
      <Button variant="contained">Statistik</Button>
      <Button>Methoden</Button>
    </ButtonGroup>
    <Box
      sx={{
        width: 360,
        height: 360,
        borderRadius: 3,
        bgcolor: 'primary.main'
      }}
    />
    <Button
      variant="contained"
      sx={{
        position: 'fixed',
        bottom: 120,
        zIndex: 100
      }}
    >
      Widget
    </Button>
    <Button
      variant="contained"
      color="success"
      sx={{
        position: 'fixed',
        bottom: 120,
        zIndex: 100
      }}
    >
      Notfall
    </Button>
  </Stack>
)

export default Statistics
