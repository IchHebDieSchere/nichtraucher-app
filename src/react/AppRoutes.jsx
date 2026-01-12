import React from 'react'

import { Route, Routes } from 'react-router-dom'

import CatNames from './Pages/CatNames/CatNames'
import Profile from './Pages/Profile/Profile'
import ProfileOverview from './Pages/Profile/ProfileOverview'
import ProfileSettings from './Pages/Profile/ProfileSettings'
import SuggestionScreen from './Pages/SuggestionScreen'
import FeedbackScreen from './Pages/FeedbackScreen'

import Error404 from './Pages/Error404'
import SplashScreen from './Pages/SplashScreen'
import WelcomeScreen from './Pages/WelcomeScreen'

const AppRoutes = () => (
  <Routes>
    <Route path="/suggestion" element={<SuggestionScreen />} />
    <Route path="/" element={<SplashScreen />} />
    <Route path="/feedback" element={<FeedbackScreen />} />
    <Route path="/welcome" element={<WelcomeScreen />} />
    <Route path="/profile" element={<Profile />}>
      <Route path="" element={<ProfileOverview />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Route>
    <Route path="/catnames" element={<CatNames />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
)

export default AppRoutes
