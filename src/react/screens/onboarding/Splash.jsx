import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ScreenLayout } from '../../components'

const Splash = ({ setStep }) => {
  useEffect(() => {
    const timer = setTimeout(() => setStep('welcome'), 1500)
    return () => clearTimeout(timer)
  }, [setStep])

  return (
    <ScreenLayout>
      <h1>Stop Smoking App</h1>
      <p>Loading...</p>
    </ScreenLayout>
  )
}

Splash.propTypes = {
  setStep: PropTypes.func.isRequired
}

export default Splash
