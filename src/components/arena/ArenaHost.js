import React from 'react'
import ArenaStyles from './ArenaStyles'
import EffectCardSlot from './EffectCardSlot'
import { useAtom } from 'jotai'
import {
  Player1HandAtom,
  Player2HandAtom,
  Player1TableAtom,
  Player2TableAtom,
  Player1DeckAtom,
  Player2DeckAtom,
} from '../../data/Atoms'
// import DeckOne from '../../data/decks/DeckOne.json'
// import DeckTwo from '../../data/decks/DeckTwo.json'
import P1Card from './P1Card'
import P2Card from './P2Card'
import MainCard from '../cards/MainCard'

const ArenaHost = ({ arena }) => {
  const [P1Hand, setP1Hand] = useAtom(Player1HandAtom)
  const [P1Deck, setP1Deck] = useAtom(Player1DeckAtom)
  const [P1Table, setP1Table] = useAtom(Player1TableAtom)

  const [P2Hand, setP2Hand] = useAtom(Player2HandAtom)
  const [P2Deck, setP2Deck] = useAtom(Player2DeckAtom)
  const [P2Table, setP2Table] = useAtom(Player2TableAtom)

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

  const drawCardP1 = () => {
    drawCard(P1Hand, setP1Hand, P1Deck, setP1Deck)
  }

  const drawCardP2 = () => {
    drawCard(P2Hand, setP2Hand, P2Deck, setP2Deck)
  }

  const handleCardDestroyed = (index, playerTable, setPlayerTable) => {
    setPlayerTable(playerTable.filter((card, i) => i !== index))
  }

  return (
    <ArenaStyles textColor={'red'}>
      <div className="player-1-cards">
        <P1Card drawCardP1={drawCardP1} />

        {P1Table.length > 0 &&
          P1Table.map((card, index) => (
            <MainCard
              card={card}
              key={index}
              index={index}
              onCardDestroyed={(idx) =>
                handleCardDestroyed(idx, P1Table, setP1Table)
              }
            />
          ))}

        <EffectCardSlot />
      </div>
      Arena
      <div className="player-2-cards">
        <P2Card drawCardP2={drawCardP2} />
        {P2Table.length > 0 &&
          P2Table.map((card, index) => (
            <MainCard
              card={card}
              key={index}
              index={index + 3}
              onCardDestroyed={(idx) =>
                handleCardDestroyed(idx, P2Table, setP2Table)
              }
            />
          ))}
        <EffectCardSlot />
      </div>
    </ArenaStyles>
  )
}

export default ArenaHost
