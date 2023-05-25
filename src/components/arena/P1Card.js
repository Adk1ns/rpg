import React from 'react'
import { useAtom } from 'jotai'
import {
  Player1TableAtom,
  Player1HandAtom,
  Player1EffectAtom,
} from '../../data/Atoms'

// This component will render a list of cards that are in the player's hand
// The player can select a card to play and move them to the table or effect area by clicking on them

const P1Card = ({ drawCardP1 }) => {
  const [P1Hand, setP1Hand] = useAtom(Player1HandAtom)
  const [P1Table, setP1Table] = useAtom(Player1TableAtom)
  const [P1Effect, setP1Effect] = useAtom(Player1EffectAtom)

  console.log(P1Table)
  console.log(P1Effect)

  // Function to handle card selection
  const handleCardClick = (card) => {
    if (card.category === 'effect' && P1Effect.length === 0) {
      setP1Effect([...P1Effect, card]) // Move the selected effect card to P1Effect
      setP1Hand(P1Hand.filter((c) => c !== card)) // Remove the selected card from the hand
    } else if (card.category !== 'effect') {
      setP1Table([...P1Table, card]) // Move the selected card to P1Table
      setP1Hand(P1Hand.filter((c) => c !== card)) // Remove the selected card from the hand
    }
  }

  return (
    <div>
      P1Card <button onClick={() => drawCardP1()}>draw</button>
      {/* List of cards in hand */}
      {P1Hand.map((card, index) => (
        <div key={index} onClick={() => handleCardClick(card)}>
          {card.name}
        </div>
      ))}
    </div>
  )
}

export default P1Card
