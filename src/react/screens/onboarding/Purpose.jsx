import React from 'react'
import PropTypes from 'prop-types'
import { ScreenLayout, Header, Text, Button, Spacer } from '../../components'

const Purpose = ({ name, setStep }) => (
  <ScreenLayout>
    <Header>Hello { name } !</Header>
    <Spacer size={3}/>
    <Text>Quitting smoking is easier than you think. We&apos;ll guide you to avoid
      relapse and track your progress.</Text>
    <Spacer size={2}/>
    <Button onClick={() => setStep('home')}>Start</Button>
  </ScreenLayout>
)

Purpose.propTypes = {
  name: PropTypes.string.isRequired,
  setStep: PropTypes.func.isRequired
}

export default Purpose
