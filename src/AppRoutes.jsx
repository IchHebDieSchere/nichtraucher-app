// Import
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Import main "screens" from zidane
import { AndroidHomeScreen } from './zidane'

// Placeholder components
const ComingSoon = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>Coming Soon</h1>
    <p>This page is under construction</p>
  </div>
)

// Error handling 404
const Error404 = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>404</h1>
    <p>Page Not Found</p>
  </div>
)

// export the html wrap
// JavaScript arrow function. Implicitly return this. Standard way to make a functional components
const AppRoutes = () => {
  return <Routes>
    <Route path="/" element={<AndroidHomeScreen />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
}

export default AppRoutes