import React from 'react'

import { Stack, Box, Button, ToggleButtonGroup, ToggleButton } from '@mui/material'
import { useNavigate } from 'react-router'

//typography caption
//flackern geht auch weg
//button behalten
//toggle anstelle von radio button

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
            }
          }}
        >
          <ToggleButton value="game">
            Tetris
          </ToggleButton>

          <ToggleButton value="breathing">
            Breathing Exercise
          </ToggleButton>

          <ToggleButton value="facts">
            Facts and Advantages
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Button
        variant="contained"
        onClick={() => routeTo('/tutorial')}
        sx={{ bgcolor: '#989595', zIndex: 100 }}
      >
        Widget
      </Button>

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

export default Methods
