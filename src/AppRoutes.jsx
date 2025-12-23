import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { AndroidHomeScreen } from './zidane'

// Placeholder components
const ComingSoon = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>Coming Soon</h1>
    <p>This page is under construction</p>
  </div>
)

const Error404 = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>404</h1>
    <p>Page Not Found</p>
  </div>
)

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AndroidHomeScreen />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
)

export default AppRoutes