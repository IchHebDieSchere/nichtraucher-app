import React from 'react'

import { Stack, Box, Button, ToggleButtonGroup, ToggleButton } from '@mui/material'
import { useNavigate } from 'react-router'

const emergencyRoutes = {
  game: '/minigame',
  breathing: '/boxBreathing',
  facts: '/facts'
}

const Methods = ({ selectedMethod, setSelectedMethod }) => {
  const routeTo = useNavigate()

  const handleToggleChange = (event, newMethod) => {
    if (newMethod !== null) {
      setSelectedMethod(newMethod)
    }
  }

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
        <ToggleButtonGroup
          value={selectedMethod}
          exclusive
          onChange={handleToggleChange}
          orientation="vertical"
          fullWidth
          sx={{
            gap: 1,
            '& .MuiToggleButton-root': {
              bgcolor: 'grey.200',
              color: 'text.primary',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1
            },
            '& .MuiToggleButton-root.Mui-selected': {
              bgcolor: '#1769aa',
              color: 'primary.contrastText'
            },
            '& .MuiToggleButton-root.Mui-selected:hover': {
              bgcolor: 'primary.dark'
            }
          }}
        >
          <ToggleButton value="game">
            Tetris
          </ToggleButton>

          <ToggleButton value="facts">
            Facts and Advantages
          </ToggleButton>

          <ToggleButton value="breathing">
            Breathing Exercise
          </ToggleButton>
        </ToggleButtonGroup>
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

export default Methods
