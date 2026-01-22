import React, { useState } from 'react'
import { Stack, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

/**
 * Used for filtering out used Elements in an Array: https://react.dev/learn/updating-arrays-in-state
 * Used for getRandomFacts: https://stackoverflow.com/questions/62709706/how-do-i-get-a-random-element-from-an-array-when-a-button-is-clicked
 */

const allFacts = [
  { id: 0, fact: 'Tobacco kills up to half of its users who don’t quit' },
  { id: 1, fact: 'Tobacco kills more than 7 million people each year, including an estimated 1.6 million non-smokers who are exposed to second-hand smoke' },
  { id: 2, fact: 'random fact 3' },
  { id: 3, fact: 'random fact 4' },
  { id: 4, fact: 'random fact 5' }
]

const getRandomFact = (facts) => facts[Math.floor(Math.random() * facts.length)]

const Facts = () => {
  const navigate = useNavigate()

  // Random fact is being generated upon first loading the page from allFacts
  const [currentFact, setCurrentFact] = useState(() => getRandomFact(allFacts))

  // Array of facts is being loaded, currently displayed facts is filtered out
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
        freshPool.filter(f => f.id !== nextFact.id)
      )
      return
    }

    const nextFact = getRandomFact(remainingFacts)

    setCurrentFact(nextFact)
    setRemainingFacts(prev => prev.filter(f => f.id !== nextFact.id))
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

      <h4>{currentFact.fact}</h4>

      <Button variant="contained" onClick={showNextFact}>
        Give me another fact
      </Button>

      <br />

      <Button variant="outlined" onClick={() => navigate('/feedback')}>
        continue
      </Button>
    </Stack>
  )
}

export default Facts
