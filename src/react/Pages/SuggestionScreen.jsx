import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography, Button } from '@mui/material'

const SuggestionScreen = () => {
  const navigate = useNavigate()

  return (
    <Stack flexGrow={1} justifyContent="space-between" p={2}>

      <Stack alignItems="flex-start" marginTop={3} marginLeft={2}>
        <Button variant="contained" onClick={() => navigate(-1)}> Zurück</Button>
      </Stack>

      <Stack alignItems="center">
        <Typography variant="h6" align="center">Möchtest du beim nächsten Mal eine andere Methode ausprobieren?</Typography>
      </Stack>

      <Stack direction="row" justifyContent="center" spacing={6} marginBottom={20}>
        <Button variant="contained" onClick={() => navigate('/method')}>Ja</Button>
        <Button variant="contained" onClick={() => navigate('/noidea')}>Nein</Button>
      </Stack>

    </Stack>
  )
}

export default SuggestionScreen
