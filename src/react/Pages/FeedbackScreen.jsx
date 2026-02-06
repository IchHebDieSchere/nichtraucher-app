import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography, IconButton, Button } from '@mui/material'
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
    >

      <Typography variant="h5" align="center" sx={{ marginTop: 6 }}>
        Wie hilfreich war das für dich?
      </Typography>

      {!mood && (
        <Typography variant="body2" align="center" sx={{ marginTop: 2 }} color="error">
          Bitte wähle eine Option aus.
        </Typography>
      )}

      <Stack direction="row" spacing={5} sx={{ marginTop: 4 }}>

        <IconButton onClick={() => setMood('bad')}>
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: badSize, color: 'red' }} />
        </IconButton>

        <IconButton onClick={() => setMood('ok')}>
          <SentimentNeutralIcon sx={{ fontSize: okSize, color: 'warning.light' }} />
        </IconButton>

        <IconButton onClick={() => setMood('good')}>
          <SentimentVerySatisfiedIcon sx={{ fontSize: goodSize, color: 'green' }} />
        </IconButton>

      </Stack>

      <Stack alignItems="center" spacing={1} marginBottom={6} marginTop={4}>
        <Button variant="contained" disabled={!mood} onClick={handleNextClick}>
          Weiter
        </Button>
      </Stack>
    </Stack>

  )
}

export default FeedbackScreen
