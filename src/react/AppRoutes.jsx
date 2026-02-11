import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Facts from './Pages/Facts/Facts'
import BoxBreathing from './Pages/BoxBreathing/BoxBreathing'
import SuggestionScreen from './Pages/SuggestionScreen'
import FeedbackScreen from './Pages/FeedbackScreen'

import Error404 from './Pages/Error404'
import Minigame from './Pages/Minigame/Minigame'
import SplashScreen from './Pages/SplashScreen'
import WelcomeScreen from './Pages/WelcomeScreen'
import MainMenu from './Pages/MainMenu/MainMenu'
import MethodScreen from './Pages/MethodScreen'

import HomeScreen from './Pages/HomeScreen'

import PlacementScreen from './Pages/PlacementScreen'

const AppRoutes = () => (
  <Routes>
    <Route path="/suggestion" element={<SuggestionScreen />} />
    <Route path="/" element={<SplashScreen />} />
    <Route path="/feedback" element={<FeedbackScreen />} />
    <Route path="/welcome" element={<WelcomeScreen />} />
    <Route path="/method/:mood?" element={<MethodScreen />} />
    <Route path="/menu" element={<MainMenu />} />
    <Route path="/facts" element={<Facts />} />
    <Route path="/minigame" element={<Minigame />} />
    <Route path="/boxBreathing" element={<BoxBreathing />} />
    <Route path="*" element={<Error404 />} />
    <Route path="/homescreen" element={<HomeScreen />} />
    <Route path="/placement" element={<PlacementScreen />} />
  </Routes>
)

export default AppRoutes
