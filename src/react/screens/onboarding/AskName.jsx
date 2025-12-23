import React from 'react'
import PropTypes from 'prop-types'
import { ScreenLayout, Header, Input, Button, Spacer } from '../components'

const AskName = ({ name, setName, setStep }) => (
  <ScreenLayout>
    <Header variant="h3" align="Center">What&apos;s your name?</Header>
    <Spacer size={2} />
    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <Spacer size={3} />
    <Button onClick={() => setStep('purpose')}>Continue</Button>
  </ScreenLayout>
)

AskName.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired
}

export default AskName
