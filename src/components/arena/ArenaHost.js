import React from 'react'
import ArenaStyles from './ArenaStyles'
import CardSlot from './CardSlot'
import EffectCardSlot from './EffectCardSlot'
import { useAtom } from 'jotai'
import { Player1HandAtom, Player2HandAtom } from '../../data/Atoms'
import DeckOne from '../../data/decks/DeckOne.json'
import DeckTwo from '../../data/decks/DeckTwo.json'

//ArenaHost will be the layout for the arenas that are passed to it
//an arena will impact the stats of the character during play

const ArenaHost = ({ arena }) => {
  const [Player1Hand, setPlayer1Hand] = useAtom(Player1HandAtom)
  const [Player1Deck, setPlayer1Deck] = React.useState(DeckOne.Cards)
  const [Player2Hand, setPlayer2Hand] = useAtom(Player2HandAtom)
  const [Player2Deck, setPlayer2Deck] = React.useState(DeckTwo.Cards)

  console.log(Player1Hand, Player1Deck)
  console.log(Player2Hand, Player2Deck)

  //function that draws a card from the deck and adds it to the hand
  const drawCard = (playerHand, setPlayerHand, playerDeck, setPlayerDeck) => {
    if (playerDeck.length === 0) {
      console.log('Deck is empty')
    } else {
      const randomCard = Math.floor(Math.random() * playerDeck.length)
      setPlayerHand([...playerHand, playerDeck[randomCard]])
      setPlayerDeck(
        playerDeck.filter((card) => card !== playerDeck[randomCard])
      )
    }
  }

  const drawCardPlayer1 = () => {
    drawCard(Player1Hand, setPlayer1Hand, Player1Deck, setPlayer1Deck)
  }

  const drawCardPlayer2 = () => {
    drawCard(Player2Hand, setPlayer2Hand, Player2Deck, setPlayer2Deck)
  }

  return (
    <ArenaStyles textColor={'red'}>
      <div className="player-1-cards">
        <div>
          Player 1 <button onClick={drawCardPlayer1}>Draw Card</button>
        </div>
        <CardSlot />
        <CardSlot />
        <CardSlot />
        <EffectCardSlot />
      </div>
      Arena
      <div className="player-2-cards">
        Computer <button onClick={drawCardPlayer2}>Draw Card</button>
        <CardSlot />
        <CardSlot />
        <CardSlot />
        <EffectCardSlot />
      </div>
    </ArenaStyles>
  )
}

export default ArenaHost
