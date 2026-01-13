import { Stack, Box } from '@mui/material'
import React from 'react'
import { ArrowBack, ArrowDownward, ArrowForward, ArrowUpward } from '@mui/icons-material'

const ArrowStep = [0, 1, 2, 3]
const ArrowRotation = ['0deg', '90deg', '180deg', '270deg']

const BoxBreathing = () => (
  <Stack
    sx={{
      flex: '1 1 auto',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <h2>Box Breathing Exercise</h2>
    <Stack
      sx={{
        flex: '1 1 auto',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >

      <Box
        sx={{
          width: 300,
          height: 300,
          border: '4px solid',
          borderColor: 'primary.main',
          borderRadius: 2,
          position: 'relative',
          mb: 4
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
          {ArrowStep.map((step) => (
            <ArrowForward key={`top-${step}`} rotation={ArrowRotation[0]} />
          ))}
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
          {ArrowStep.map((step) => (
            <ArrowDownward key={`right-${step}`} rotation={ArrowRotation[1]} />
          ))}
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
          {ArrowStep.map((step) => (
            <ArrowBack key={`bottom-${step}`} rotation={ArrowRotation[2]} />
          ))}
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
          {ArrowStep.map((step) => (
            <ArrowUpward key={`left-${step}`} rotation={ArrowRotation[3]} />
          ))}
        </Stack>

      </Box>
    </Stack>

  </Stack>
)

export default BoxBreathing
