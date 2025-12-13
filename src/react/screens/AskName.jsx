import React from 'react'
import PropTypes from 'prop-types'
import ScreenLayout from '../Components/ScreenLayout'

const AskName = ({ name, setName, setStep }) => (
  <ScreenLayout>
    <h1>What&apos;s your name?</h1>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <button type="button" onClick={() => setStep('purpose')}>Continue</button>
  </ScreenLayout>
)

AskName.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired
}

export default AskName
