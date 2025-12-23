import React from 'react'
import PropTypes from 'prop-types'
import { ScreenLayout, Header, Text, Button, Spacer } from '../../components'

const Welcome = ({ setStep }) => (
  <ScreenLayout>
    <Header variant="h3" align="center">Welcome</Header>
    <Spacer size={2} />
    <Text align="center">
    We&apos;re here to help you quit smoking step by step.
    </Text>
    <Spacer size={3} />
    <Button
      sx={{
        display: 'flex',
        justifyContent: 'flex-end', // right
        mt:2,
      }}
    onClick={() => setStep('askName')}>
      Continue
    </Button>
  </ScreenLayout>
)

Welcome.propTypes = {
  setStep: PropTypes.func.isRequired
}

export default Welcome
