import React from 'react'
import PropTypes from 'prop-types'
import ScreenLayout from '../components/ScreenLayout'

const Purpose = ({ name, setStep }) => (
  <ScreenLayout>
    <h1>
      Hello
      {name}
      !
    </h1>
    <p>
      Quitting smoking is easier than you think. We&apos;ll guide you to avoid
      relapse and track your progress.
    </p>
    <button type="button" onClick={() => setStep('home')}>Start</button>
  </ScreenLayout>
)

Purpose.propTypes = {
  name: PropTypes.string.isRequired,
  setStep: PropTypes.func.isRequired
}

export default Purpose
