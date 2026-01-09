import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'

const WelcomeScreen = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const handleNameSubmit = (event) => {
    event.preventDefault()

    const cleanedName = name.trim()

    if (cleanedName !== '') {
      localStorage.setItem('userName', cleanedName)
    }
    navigate('/method')
  }

  return (
    <Stack flex="1 1 auto" justifyContent="center" alignItems="center">
      <form onSubmit={handleNameSubmit}>
        <p>Wie dürfen wir dich nennen? (optional)</p>

        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />

        <button type="submit">Weiter</button>
      </form>
    </Stack>
  )
}

export default WelcomeScreen
