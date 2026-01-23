import React from 'react'

import { Stack, Box, Button, FormControlLabel, FormGroup, Checkbox } from '@mui/material'

import { useNavigate } from 'react-router'
import useWidgetAdded from '../../../hooks/useWidgetAdded'

const Methods = ({ methods, setMethods }) => {
  const { isWidgetAdded, markWidgetAdded, resetWidgetAdded } = useWidgetAdded()
  const navigate = useNavigate()

  // ?
  const handleChange = (event) => {
    const { name, checked } = event.target
    setMethods(prev => ({ ...prev, [name]: checked }))
  }

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
        <FormGroup>
          <FormControlLabel control={<Checkbox name="minigame" checked={methods.minigame} onChange={handleChange} />} label="Minigame" />
          <FormControlLabel control={<Checkbox name="breathing" checked={methods.breathing} onChange={handleChange} />} label="Atemübung" />
          <FormControlLabel control={<Checkbox name="facts" checked={methods.facts} onChange={handleChange} />} label="Fakten & Vorteile" />
        </FormGroup>
      </Box>
      {!isWidgetAdded && (
        <Button
          variant="contained"
          onClick={() => {
            // navigate('/screen4') // mit pattys screen replacen + sie muss markWidgetAdded einbauen?
            markWidgetAdded()
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
      <Button //temporär später entfernen
        variant="contained"
        onClick={() => {
          resetWidgetAdded()
        }}
        sx={{
          bgcolor: '#b05f5f',
          color: 'fff',
          zIndex: 98
        }}
      >
        resetWidget
      </Button>
    </Stack>
  )
}

export default Methods
