import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography, Button } from '@mui/material'

const SuggestionScreen = () => {
  const navigate = useNavigate()

  return (
    <Stack flex="1 1 auto" justifyContent="space-between" padding={2}>

      <Stack alignItems="center" flex="1" justifyContent="center">
        <Typography align="center">
          Would you like to try another method next time?
        </Typography>

        <Stack direction="row" width="100%" justifyContent="space-between" px={4} paddingTop={3}>
          <Button variant="outlined" onClick={() => { navigate(-1) }}>Back</Button>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => navigate('/method/ok')}>Yes</Button>
            <Button variant="contained" onClick={() => navigate('/menu')}>No</Button>
          </Stack>
        </Stack>
      </Stack>

    </Stack>
  )
}

export default SuggestionScreen
