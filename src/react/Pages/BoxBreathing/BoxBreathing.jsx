import React, { useEffect, useState } from 'react'
import { Stack, Box, Button } from '@mui/material'
import { ArrowBack, ArrowDownward, ArrowForward, ArrowUpward } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const ArrowStep = [0, 1, 2, 3]
const PHASES = [
  { label: 'Breathe in', side: 'top' },
  { label: 'Hold', side: 'right' },
  { label: 'Breathe out', side: 'bottom' },
  { label: 'Hold', side: 'left' }
]

const isArrowActive = (side, index, activeSide, step) => {
  if (side !== activeSide) return false
  // Opposite direction on bottom and left sides
  if (side === 'bottom' || side === 'left') {
    return index >= 3 - step
  }
  return index <= step
}

const BoxBreathing = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [phaseIndex, setPhaseIndex] = useState(0)

  // Set up interval to update step every second & Phase every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => {
        if (prevStep === 3) {
          // Move to next breathing phase after 4 seconds
          setPhaseIndex((prevPhase) => (prevPhase + 1) % PHASES.length)
          return 0
        }
        return prevStep + 1
      })
    }, 1000)

    // Cleanup interval when component unmounts
    return () => clearInterval(interval)
  }, [])
  const { side, label } = PHASES[phaseIndex]

  return (
    <Stack
      sx={{
        flex: '1 1 auto',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h2>Box Breathing Exercise</h2>
      <h2>{label}</h2>
      <Stack
        sx={{
          flex: '1 1 auto',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

        {/* Box with Arrows */}

        <Box
          sx={{
            width: 300,
            height: 300,
            border: '4px solid',
            borderColor: 'primary.main',
            borderRadius: 2,
            position: 'relative'
          }}
        >

          {/* Top Arrows */}

          <Stack
            direction="row"
            sx={{
              position: 'absolute',
              top: -40,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            {
                ArrowStep.map((i) => (
                  <ArrowForward
                    key={`top-${i}`}
                    color={isArrowActive('top', i, side, step) ? 'primary' : 'disabled'}
                  />
                ))
            }
          </Stack>

          {/* Right Side Arrows */}

          <Stack
            direction="column"
            sx={{
              position: 'absolute',
              right: -40,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            {
                ArrowStep.map((i) => (
                  <ArrowDownward
                    key={`right-${i}`}
                    color={isArrowActive('right', i, side, step) ? 'primary' : 'disabled'}
                  />
                ))
            }
          </Stack>

          {/* Bottom Arrows */}

          <Stack
            direction="row"
            sx={{
              position: 'absolute',
              bottom: -40,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            {
                ArrowStep.map((i) => (
                  <ArrowBack
                    key={`bottom-${i}`}
                    color={isArrowActive('bottom', i, side, step) ? 'primary' : 'disabled'}
                  />
                ))
            }
          </Stack>

          {/* Left Side Arrows */}

          <Stack
            direction="column"
            sx={{
              position: 'absolute',
              left: -40,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            {
                ArrowStep.map((i) => (
                  <ArrowUpward
                    key={`left-${i}`}
                    color={isArrowActive('left', i, side, step) ? 'primary' : 'disabled'}
                  />
                ))
            }
          </Stack>

        </Box>
      </Stack>
      <Button
        variant="contained"
        onClick={() => navigate('/feedback')}
      >
        Continue
      </Button>
    </Stack>
  )
}

export default BoxBreathing
