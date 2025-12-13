import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Splash from './screens/Splash'
import Welcome from './screens/Welcome'
import Purpose from './screens/Purpose'
import AskName from './screens/AskName'
import TrueHome from './screens/Home'
import ComponentDemo from './screens/ComponentDemo'

import Home from './Pages/Home'
import CatNames from './Pages/CatNames/CatNames'
import Profile from './Pages/Profile/Profile'
import ProfileOverview from './Pages/Profile/ProfileOverview'
import ProfileSettings from './Pages/Profile/ProfileSettings'

import Error404 from './Pages/Error404'

const AppRoutes = () => (
  <Routes>
    <Route path = "/demo" element={<ComponentDemo />} />
    <Route path="/splash" element={<Splash />} />
    <Route path="/welcome" element={<Welcome />} />
    <Route path="/purpose" element={<Purpose />} />
    <Route path="/askname" element={<AskName />} />
    <Route path="/truehome" element={<TrueHome />} />
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />}>
      <Route path="" element={<ProfileOverview />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Route>
    <Route path="/catnames" element={<CatNames />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
)

export default AppRoutes
