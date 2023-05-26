import React from 'react'
import { useAtom } from 'jotai'
import {
  Player2TableAtom,
  Player2HandAtom,
  Player2EffectAtom,
} from '../../data/Atoms'

const P2Card = ({ drawCardP2 }) => {
  const [P2Hand, setP2Hand] = useAtom(Player2HandAtom)
  const [P2Table, setP2Table] = useAtom(Player2TableAtom)
  const [P2Effect, setP2Effect] = useAtom(Player2EffectAtom)

  console.log(P2Table)
  console.log(P2Effect)

  const handleCardClick = (card) => {
    if (card.category === 'effect' && P2Effect.length === 0) {
      setP2Effect([...P2Effect, card])
      setP2Hand(P2Hand.filter((c) => c !== card))
    } else if (card.category !== 'effect' && P2Table.length < 3) {
      setP2Table([...P2Table, card])
      setP2Hand(P2Hand.filter((c) => c !== card))
    }
  }

  return (
    <div>
      P2Card{' '}
      <button onClick={() => drawCardP2()} disabled={P2Hand.length >= 5}>
        draw
      </button>
      {P2Hand.map((card, index) => (
        <div key={index} onClick={() => handleCardClick(card)}>
          {card.name}
        </div>
      ))}
    </div>
  )
}

export default P2Card
