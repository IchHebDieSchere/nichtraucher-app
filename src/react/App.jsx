import React, { useState } from 'react'
import Splash from './screens/Splash'
import Welcome from './screens/Welcome'
import AskName from './screens/AskName'
import Purpose from './screens/Purpose'
import AppLayout from './AppLayout'
import ComponentDemo from './screens/ComponentDemo'

const App = () => {
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

  return <ComponentDemo />
}

export default App
