import React from 'react'

export default function useMainMenuTab(initialTab = 'statistik') {
  const [tab, setTab] = React.useState(initialTab)

  const handleTabChange = React.useCallback((event, newTab) => {
    if (newTab !== null) {
      setTab(newTab)
    }
  }, [])
  return { tab, setTab, handleTabChange }
}
