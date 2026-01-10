import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'

const FeedbackScreen = () => {
  const navigate = useNavigate()
  const [mood, setMood] = useState('')

  const handleNextClick = () => {
    if (!mood) {
      return
    }

    if (mood === 'bad') {
      navigate('/method')
    } else if (mood === 'ok') {
      navigate('/suggestion')
    } else if (mood === 'good') {
      navigate('/noidea')
    }
  }

  const badSize = mood === 'bad' ? 90 : 64
  const okSize = mood === 'ok' ? 90 : 64
  const goodSize = mood === 'good' ? 90 : 64

  return (
    <Stack flex="1 1 auto" justifyContent="center" alignItems="center" padding={2}>

      <Typography variant="h5" align="center" sx={{ marginTop: 6 }}>Wie hilfreich war das für dich?</Typography>

      {!mood && (
      <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>Bitte wähle eine Option aus.</Typography>
      )}

      <Stack direction="row" spacing={5} sx={{ marginTop: 4 }}>

        <button type="button" onClick={() => setMood('bad')} style={{ background: 'none', border: 'none' }}>
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: badSize, color: '#e53935' }} />
        </button>

        <button type="button" onClick={() => setMood('ok')} style={{ background: 'none', border: 'none' }}>
          <SentimentNeutralIcon sx={{ fontSize: okSize, color: '#fbc02d' }} />
        </button>

        <button type="button" onClick={() => setMood('good')} style={{ background: 'none', border: 'none' }}>
          <SentimentVerySatisfiedIcon sx={{ fontSize: goodSize, color: '#43a047' }} />
        </button>

      </Stack>

      <Stack alignItems="center" spacing={1} marginBottom={6}>
        <button type="button" disabled={!mood} onClick={handleNextClick} style={{ marginTop: 60 }}> Weiter </button>
      </Stack>
    </Stack>

  )
}

export default FeedbackScreen
