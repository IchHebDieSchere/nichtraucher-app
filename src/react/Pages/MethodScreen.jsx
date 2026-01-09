import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'

const MethodScreen = () => {
  const navigate = useNavigate()
  const [selectedMethods, setSelectedMethods] = useState({
    game: false,
    facts: false,
    breathing: false
  })

  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name
    const isChecked = event.target.checked

    setSelectedMethods({
      ...selectedMethods,
      [checkboxName]: isChecked
    })
  }

  return (
    <Stack flex="1 1 auto" justifyContent="center" alignItems="center">
      <p>Mit welcher Methode können wir dich am besten unterstützen?</p>

      <label>
        <input type="checkbox" name="game" checked={selectedMethods.game} onChange={handleCheckboxChange} />
        Methode: Spiel, z.B. Tetris
      </label>

      <label>
        <input type="checkbox" name="facts" checked={selectedMethods.facts} onChange={handleCheckboxChange} />
        Methode: Fakten über Craving und Vorteile des Durchhaltens
      </label>

      <label>
        <input type="checkbox" name="breathing" checked={selectedMethods.breathing} onChange={handleCheckboxChange} />
        Methode: Atem-/Dehnübung
      </label>
    </Stack>
  )
}

export default MethodScreen
