import React from 'react'

import { Stack, ButtonGroup } from '@mui/material'
import { Box } from '@mui/system'
import Button from '../../Components/Button'

const Statistics = () => {
  const isWidgetAdded = true
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={1}
    >
      <ButtonGroup
        variant="outlined"
        sx={{
          zIndex: 100
        }}
      >
        <Button variant="outlined">Statistik</Button>
        <Button variant="outlined">Methoden</Button>
      </ButtonGroup>
      <Box
        sx={{
          width: 360,
          height: 360,
          borderRadius: 3,
          border: '1px solid',
          p: 1
        }}
      >
        Lorem ipsum statistik
      </Box>
      {!isWidgetAdded && ( //gpt
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
