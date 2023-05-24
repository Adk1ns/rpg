import React from 'react'
import TrainerStyles from '../trainer/TrainerStyles'
import ArenaHost from '../arena/ArenaHost'

//trainer will be the primary part of the app to start
//a player can use their deck to play against the computer
//can earn either stats or cards
//this will host the arena where the players will battle with their cards

const Trainer = () => {
  return (
    <TrainerStyles>
      Trainer
      <ArenaHost arena={null} />
    </TrainerStyles>
  )
}

export default Trainer
