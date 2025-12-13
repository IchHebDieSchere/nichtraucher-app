import React from 'react'
import PropTypes from 'prop-types'
import ScreenLayout from '../Components/ScreenLayout'

const Welcome = ({ setStep }) => (
  <ScreenLayout>
    <h1>Welcome!</h1>
    <p>We&apos;re here to help you quit smoking step by step.</p>
    <button type="button" onClick={() => setStep('askName')}>Continue</button>
  </ScreenLayout>
)

Welcome.propTypes = {
  setStep: PropTypes.func.isRequired
}

export default Welcome
