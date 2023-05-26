import React from 'react'
import { useAtom } from 'jotai'
import {
  Player1TableAtom,
  Player1HandAtom,
  Player1EffectAtom,
} from '../../data/Atoms'

const P1Card = ({ drawCardP1 }) => {
  const [P1Hand, setP1Hand] = useAtom(Player1HandAtom)
  const [P1Table, setP1Table] = useAtom(Player1TableAtom)
  const [P1Effect, setP1Effect] = useAtom(Player1EffectAtom)

  console.log(P1Table)
  console.log(P1Effect)

  const handleCardClick = (card) => {
    if (card.category === 'effect' && P1Effect.length === 0) {
      setP1Effect([...P1Effect, card])
      setP1Hand(P1Hand.filter((c) => c !== card))
    } else if (card.category !== 'effect' && P1Table.length < 3) {
      setP1Table([...P1Table, card])
      setP1Hand(P1Hand.filter((c) => c !== card))
    }
  }

  return (
    <div>
      P1Card{' '}
      <button onClick={() => drawCardP1()} disabled={P1Hand.length >= 5}>
        draw
      </button>
      {P1Hand.map((card, index) => (
        <div key={index} onClick={() => handleCardClick(card)}>
          {card.name}
        </div>
      ))}
    </div>
  )
}

export default P1Card
