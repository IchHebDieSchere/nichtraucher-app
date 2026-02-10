import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography, IconButton, Button, Box } from '@mui/material'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'

const FeedbackScreen = () => {
  const navigate = useNavigate()
  const [mood, setMood] = useState('')

  const handleNextClick = () => {
    if (mood === 'bad') {
      navigate('/method/bad')
    } else if (mood === 'ok') {
      navigate('/suggestion')
    } else if (mood === 'good') {
      navigate('/menu')
    }
  }

  const badSize = mood === 'bad' ? 90 : 64
  const okSize = mood === 'ok' ? 90 : 64
  const goodSize = mood === 'good' ? 90 : 64

  return (
    <Stack
      flexGrow={1}
      flexShrink={1}
      flexBasis="auto"
      justifyContent="center"
      alignItems="center"
      p={2}
      width="100%"
    >

      <Typography variant="h5" align="center">
        Wie hilfreich war das für dich?
      </Typography>

      <Typography align="center" sx={{ marginTop: 2 }}>
        Bitte wähle eine Option aus.
      </Typography>

      <Stack width="100%" direction="row" justifyContent="space-between" px={2} sx={{ marginTop: 3 }}>
        <Box
          alignItems="center"
          justifyContent="center"
          sx={{
            display: 'flex',
            width: '106px',
            height: '106px'
          }}
        >
          <IconButton onClick={() => setMood('bad')}>
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: badSize, color: 'red' }} />
          </IconButton>
        </Box>

        <Box
          width="106px"
          alignItems="center"
          justifyContent="center"
          sx={{
            display: 'flex',
            width: '106px',
            height: '106px'
          }}
        >
          <IconButton onClick={() => setMood('ok')}>
            <SentimentNeutralIcon sx={{ fontSize: okSize, color: 'warning.light' }} />
          </IconButton>
        </Box>

        <Box
          width="106px"
          alignItems="center"
          justifyContent="center"
          sx={{
            display: 'flex',
            width: '106px',
            height: '106px'
          }}
        >
          <IconButton onClick={() => navigate('/menu')}>
            <SentimentVerySatisfiedIcon sx={{ fontSize: goodSize, color: 'green' }} />
          </IconButton>
        </Box>

      </Stack>

      <Stack sx={{ height: '90px' }} alignItems="center" marginTop={3}>
        {!!mood &&
        <Button variant="contained" onClick={handleNextClick}>
          Weiter
        </Button>}
      </Stack>
    </Stack>

  )
}

export default FeedbackScreen
