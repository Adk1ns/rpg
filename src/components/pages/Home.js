import React from 'react'
import HomeStyles from '../home/HomeStyles'
import { Link } from 'react-router-dom'

//Trainer button is a link to train page

//home will contain:
//my deck
//link to store
//fan art
//link to trainer
//link to battle
//link to profile
//link to settings
//link to logout
//log in

const Home = () => {
  return (
    <HomeStyles>
      Home
      <Link to="/train">
        <button>Trainer</button>
      </Link>
    </HomeStyles>
  )
}

export default Home
