import React, { useState } from 'react'
import { Stack, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const facts = [
  'Tobacco kills up to half of its users who don’t quit',
  'Tobacco kills more than 7 million people each year, including an estimated 1.6 million non-smokers who are exposed to second-hand smoke'
]

const getRandomFact = () => {
  const randomIndex = Math.floor(Math.random() * facts.length)
  return facts[randomIndex]
}

const [fact, setFact] = useState(() => getRandomFact())

const Facts = () => {
  const navigate = useNavigate()

  return (
    <Stack
      sx={{
        flex: '1 1 auto',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h2>Smoking Facts</h2>
      <h3>Did you know?</h3>
      <h4>{fact}</h4>

      <Button
        variant="contained"
        onClick={() => setFact(getRandomFact())}
      >
        Give me another fact
      </Button>
      <br />
      <Button
        variant="outlined"
        onClick={() => navigate('/feedback')}
      >
        continue
      </Button>
    </Stack>
  )
}

export default Facts
