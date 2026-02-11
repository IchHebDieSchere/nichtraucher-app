import React, { useState } from 'react'
import { Stack, Button, Card, CardContent, CardActions, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SmokeFreeIcon from '@mui/icons-material/SmokeFree'

/**
 * Used for filtering out used Elements in an Array: https://react.dev/learn/updating-arrays-in-state
 * Used for getRandomFacts: https://stackoverflow.com/questions/62709706/how-do-i-get-a-random-element-from-an-array-when-a-button-is-clicked
 * Facts from https://einsteinmed.edu/uploadedFiles/bronxbreathes/10%20Things.pdf & https://www.who.int/news-room/fact-sheets/detail/tobacco
 */

const allFacts = [
  { id: 0, fact: 'Tobacco kills up to half of its users who don’t quit' },
  { id: 1, fact: 'Tobacco kills more than 7 million people each year, including an estimated 1.6 million non-smokers who are exposed to second-hand smoke' },
  { id: 2, fact: 'Smokers are about twice as likely to die from cancer as non-smokers' },
  { id: 3, fact: 'Smokers are about three times as likely to die from heart attack as non-smokers.' },
  { id: 4, fact: 'One-half of heavy smokers (25 cigarettes or more per day) will die of diseases caused by their smoking.' },
  { id: 5, fact: 'More than 2,500 deaths of infants under one year of age are attributable to smoking by mothers.' },
  { id: 6, fact: 'Among men aged 40-50, deaths from heart disease are nine times more common in smokers that in non-smokers.' }
]

const getRandomFact = (facts) => facts[Math.floor(Math.random() * facts.length)]

const Facts = () => {
  const navigate = useNavigate()

  // Random fact is being generated upon first loading the page from allFacts
  const [currentFact, setCurrentFact] = useState(() => getRandomFact(allFacts))

  // Array of facts is being loaded, currently displayed fact is filtered out
  const [remainingFacts, setRemainingFacts] = useState(() => allFacts.filter(f => f.id !== currentFact.id))

  const showNextFact = () => {
    // When all facts have been shown, new array is initialized,
    // current fact is excluded to avoid showing same fact twice in a row
    if (remainingFacts.length === 0) {
      const freshPool = allFacts.filter(
        f => f.id !== currentFact.id
      )

      const nextFact = getRandomFact(freshPool)

      setCurrentFact(nextFact)
      setRemainingFacts(
        freshPool.filter(
          f => f.id !== nextFact.id
        )
      )
      return
    }

    const nextFact = getRandomFact(remainingFacts)

    setCurrentFact(nextFact)
    setRemainingFacts(prev => prev.filter(
      f => f.id !== nextFact.id
    ))
  }

  return (
    <Stack
      sx={{
        flex: '1 1 auto',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant="h4" gutterBottom>
        Did you know?
      </Typography>

      <Card
        sx={{
          variant: 'outlined',
          maxWidth: 400,
          minHeight: 350,
          display: 'flex',
          textAlign: 'center',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#f5f5f5',
          p: 2
        }}
      >
        <CardContent>
          <SmokeFreeIcon
            sx={{ fontSize: 50, mb: 2 }}
            color="action"
          />

          <Typography variant="h6">
            {currentFact.fact}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'center', mt: 'auto' }}>
          <Button
            variant="outlined"
            onClick={showNextFact}
          >
            Give me another fact
          </Button>
        </CardActions>
      </Card>

      <Button
        sx={{ mt: 3 }}
        variant="contained"
        onClick={() => navigate('/feedback')}
      >
        Finish
      </Button>
    </Stack>
  )
}

export default Facts
