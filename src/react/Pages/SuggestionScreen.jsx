import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'

const SuggestionScreen = () => {
  const navigate = useNavigate()

  return (
    <Stack flex="1 1 auto" justifyContent="space-between" padding={2}>

      <Stack alignItems="flex-start" marginTop={3} marginLeft={2}>
        <button type="button" onClick={() => { navigate(-1) }}> Zurück</button>
      </Stack>

      <Stack alignItems="center">
        <Typography variant="h6" align="center">Möchtest du beim nächsten Mal eine andere Methode ausprobieren?</Typography>
      </Stack>

      <Stack direction="row" justifyContent="center" spacing={6} marginBottom={20}>
        <button type="button" onClick={() => navigate('/method/ok')}>Ja</button>
        <button type="button" onClick={() => navigate('/menu')}>Nein</button>
      </Stack>

    </Stack>
  )
}

export default SuggestionScreen
