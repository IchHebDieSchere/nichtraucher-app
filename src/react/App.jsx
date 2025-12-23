import React, { useState } from 'react'
import Splash from './screens/onboarding/Splash'
import Welcome from './screens/onboarding/Welcome'
import AskName from './screens/onboarding/AskName'
import Purpose from './screens/onboarding/Purpose'
import AppLayout from './AppLayout'
import ComponentDemo from './screens/demo/ComponentDemo'
import AndroidHomeScreen from './screens/demo/AndroidHomeScreen/AndroidHomeScreen'

const App = () => {
  /*
  const [step, setStep] = useState('splash')
  const [name, setName] = useState('')

  if (step === 'splash') {
    return <Splash setStep={setStep} />
  }

  if (step === 'welcome') {
    return <Welcome setStep={setStep} />
  }

  if (step === 'askName') {
    return <AskName name={name} setName={setName} setStep={setStep} />
  }

  if (step === 'purpose') {
    return <Purpose name={name} setStep={setStep} />
  }
*/
  return <AndroidHomeScreen />
}

export default App
