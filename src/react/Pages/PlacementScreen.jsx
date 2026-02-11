/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Stack, Button, Typography } from '@mui/material'
import tutorialImg from '../../assets/tutorial.png'

const PlacementScreen = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  const handleDone = () => {
    navigate('/menu')
  }
  const handleLater = () => {
    navigate('/menu')
  }

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="space-between"
      alignItems="center"
      spacing={3}
      sx={{ px: 3, py: 3 }}
    >
      <Stack spacing={1} alignSelf="flex-start">
        <Typography>
          You can now place the widget on your home screen.
        </Typography>
        <Typography>
          This gives you quick and easy access as soon as you unlock your phone.
        </Typography>
      </Stack>
      <Box component="img" src={tutorialImg} alt="*insert GIF here*" />

      <Box sx={{ p: 2 }}>
        <Typography>Step 1: Press and hold the home screen</Typography>
        <Typography>Step 2: Select “Widgets”</Typography>
        <Typography>Step 3: Find and place the widget</Typography>
      </Box>

      <Stack alignSelf="flex-end" spacing={2}>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={handleBack}
            variant="outlined"
            sx={{ alignSelf: 'flex-start' }}
          >
            Back
          </Button>
          <Button onClick={handleDone} variant="contained" fullWidth>
            Done
          </Button>
        </Stack>
        <Button fullWidth onClick={handleLater} variant="text">
          Remind later
        </Button>
      </Stack>
    </Stack>
  )
}

export default PlacementScreen
