import React, { useEffect, useState } from 'react'
import { Stack, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './BoxBreathing.css'

/**
 * Box Breathing information found via https://nicetomeetme.at/box-breathing/ & https://www.youtube.com/watch?v=tEmt1Znux58
 */

/**
 * Definition of the 4 box-breathing phases.
 * Each phase lasts 4 seconds and maps to one side of the box.
 */
const PHASES = [
  { label: 'Breathe in', side: 'top' },
  { label: 'Hold', side: 'right' },
  { label: 'Breathe out', side: 'bottom' },
  { label: 'Hold', side: 'left' }
]

/**
 * Determines whether a specific arrow should be lit up.
 *
 * - For top & right sides, arrows light up in normal order (0 → 3)
 * - For bottom & left sides, arrows light up in reverse order (3 → 0)
 *
 * @param {string} side - The side of the box (top, right, bottom, left)
 * @param {number} index - Index of the arrow (0–3)
 * @param {number} step - Current second within the phase (0–3)
 */
const isArrowActive = (side, index, step) => {
  if (side === 'bottom' || side === 'left') {
    return index >= 3 - step
  }
  return index <= step
}

const BoxBreathing = () => {
  /**
   * Index of the current breathing phase (0–3)
   * 0: Breathe in
   * 1: Hold
   * 2: Breathe out
   * 3: Hold
   */
  const [phaseIndex, setPhaseIndex] = useState(0)

  /**
   * Step within the current phase (0–3)
   * Represents the 4 seconds visually via arrows
   */
  const [step, setStep] = useState(0)

  /**
   * Main timing loop.
   * Runs once per second.
   *
   * - Advances the arrow step every second
   * - After 4 steps, moves to the next phase
   * - Loops indefinitely
   */
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

  // Extract the active side and instruction label
  const { side, label } = PHASES[phaseIndex]
  const navigate = useNavigate()
  return (
    <Stack
      sx={{
        flex: '1 1 auto',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="breathing-container">
        <h2>Box Breathing</h2>
        {/* Instruction text */}
        <h2>{label}</h2>

        {/* Breathing box */}
        <div className="box">
          {['top', 'right', 'bottom', 'left'].map((s) => (
            <div key={s} className={`edge ${s}`}>
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`arrow ${
                    s === side && isArrowActive(s, i, step) ? 'active' : ''
                  }`}
                >
                  {/* Arrow direction depends on box side */}
                  {s === 'top' && '→'}
                  {s === 'right' && '↓'}
                  {s === 'bottom' && '←'}
                  {s === 'left' && '↑'}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <br />
      <Button
        variant="contained"
        onClick={() => navigate('/Feedback')}
      >
        Continue
      </Button>
    </Stack>
  )
}

export default BoxBreathing
