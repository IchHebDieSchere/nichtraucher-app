import React from 'react'
import PropTypes from 'prop-types'
import ScreenLayout from '../Components/ScreenLayout'

const Home = ({ name }) => (
  <ScreenLayout>
    <h1>Welcome to your Dashboard, {name || 'User'}!</h1>
    <p>Your journey to stop smoking starts here.</p>
    <ul>
      <li>Track your progress</li>
      <li>Log craving</li>
      <li>Get motivational tips</li>
    </ul>
  </ScreenLayout>
)

Home.propTypes = {
  name: PropTypes.string.isRequired
}

export default Home