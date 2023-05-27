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
  P1FirstCard,
  P1SecondCard,
  P1ThirdCard,
  P2FirstCard,
  P2SecondCard,
  P2ThirdCard,
} from '../../data/Atoms'
import P1Card from './P1Card'
import P2Card from './P2Card'
import MainCard from '../cards/MainCard'

const ArenaHost = ({ arena }) => {
  const [P1Hand, setP1Hand] = useAtom(Player1HandAtom)
  const [P1Deck, setP1Deck] = useAtom(Player1DeckAtom)
  const [P1Table, setP1Table] = useAtom(Player1TableAtom)
  const [P1CardA, setP1CardA] = useAtom(P1FirstCard)
  const [P1CardB, setP1CardB] = useAtom(P1SecondCard)
  const [P1CardC, setP1CardC] = useAtom(P1ThirdCard)

  const [P2Hand, setP2Hand] = useAtom(Player2HandAtom)
  const [P2Deck, setP2Deck] = useAtom(Player2DeckAtom)
  const [P2Table, setP2Table] = useAtom(Player2TableAtom)
  const [P2CardA, setP2CardA] = useAtom(P2FirstCard)
  const [P2CardB, setP2CardB] = useAtom(P2SecondCard)
  const [P2CardC, setP2CardC] = useAtom(P2ThirdCard)

  const drawCard = (playerHand, setPlayerHand, playerDeck, setPlayerDeck) => {
    if (playerDeck.length === 0) {
      console.log('Deck is empty')
    } else {
      //
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

  const handleCardDestroyed = (id) => {
    setP1Table(P1Table.filter((card) => card.id !== id))
    setP2Table(P2Table.filter((card) => card.id !== id))

    console.log(P1Table)

    if (P1CardA != null) {
      if (id === P1CardA.id) {
        setP1CardA(null)
      }
    }
    if (P1CardB != null) {
      if (id === P1CardB.id) {
        setP1CardB(null)
      }
    }
    if (P1CardC != null) {
      if (id === P1CardC.id) {
        setP1CardC(null)
      }
    }
    if (P2CardA != null) {
      if (id === P2CardA.id) {
        setP2CardA(null)
      }
    }
    if (P2CardB != null) {
      if (id === P2CardB.id) {
        setP2CardB(null)
      }
    }
    if (P2CardC != null) {
      if (id === P2CardC.id) {
        setP2CardC(null)
      }
    }
  }

  return (
    <ArenaStyles textColor={'red'}>
      <div className="player-1-cards">
        <P1Card drawCardP1={drawCardP1} />

        {P1CardA && (
          <MainCard
            card={P1CardA}
            index={0}
            onCardDestroyed={handleCardDestroyed}
          />
        )}
        {P1CardB && (
          <MainCard
            card={P1CardB}
            index={1}
            onCardDestroyed={handleCardDestroyed}
          />
        )}
        {P1CardC && (
          <MainCard
            card={P1CardC}
            index={2}
            onCardDestroyed={handleCardDestroyed}
          />
        )}

        <EffectCardSlot />
      </div>
      Arena
      <div className="player-2-cards">
        <P2Card drawCardP2={drawCardP2} />

        {P2CardA && (
          <MainCard
            card={P2CardA}
            index={3}
            onCardDestroyed={handleCardDestroyed}
          />
        )}
        {P2CardB && (
          <MainCard
            card={P2CardB}
            index={4}
            onCardDestroyed={handleCardDestroyed}
          />
        )}
        {P2CardC && (
          <MainCard
            card={P2CardC}
            index={5}
            onCardDestroyed={handleCardDestroyed}
          />
        )}

        <EffectCardSlot />
      </div>
    </ArenaStyles>
  )
}

export default ArenaHost
