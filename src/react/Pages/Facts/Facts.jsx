import React from 'react'

import { Stack, Button } from '@mui/material'

const Facts = () => {
  const facts = [
    'Tobacco kills up to half of its users who don’t quit',
    'Tobacco kills more than 7 million people each year, including an estimated 1.6 million non-smokers who are exposed to second-hand smoke'
  ]

  const [fact, setFact] = React.useState('Click the button to learn a fun fact!')

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length)
    setFact(facts[randomIndex])
  }

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
      <h4>
        {fact}
      </h4>
      <Button
        variant="contained"
        onClick={getRandomFact}
      >
        Show Me a Fun Fact
      </Button>
    </Stack>
  )
}

export default Facts
