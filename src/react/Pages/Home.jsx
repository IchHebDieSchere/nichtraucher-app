import React, { useState } from 'react'

import { Stack, Typography } from '@mui/material'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'

const Home = () => {
  const [mood, setMood] = useState('idk')

  let moodIcon

  if (mood === 'boah') {
    moodIcon = <SentimentVeryDissatisfiedIcon sx={{ color: 'red', fontSize: 60 }} />
  } else if (mood === 'super') {
    moodIcon = <SentimentVerySatisfiedIcon sx={{ color: 'orange', fontSize: 60 }} />
  } else if (mood === 'ok') {
    moodIcon = <SentimentNeutralIcon sx={{ color: 'blue', fontSize: 60 }} />
  } else {
    moodIcon = <PsychologyAltIcon sx={{ color: 'grey', fontSize: 60 }} />
  }

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
      spacinng={3} // distance between blocks
    >
      <Typography variant="h4">
        Welcome to the App!
      </Typography>

      <Typography variant="h5">
        What is your current mood today?
      </Typography>

      <Typography variant="h5">
        {moodIcon}
      </Typography>

      <Stack direction="row" spacing={2}>
        <button type="button" onClick={() => setMood('super')}>SUPER</button>
        <button type="button" onClick={() => setMood('ok')}>OK</button>
        <button type="button" onClick={() => setMood('boah')}>BOAH!</button>
      </Stack>

    </Stack>
  )
}

export default Home
