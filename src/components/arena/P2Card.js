import React from 'react'
import { useAtom } from 'jotai'
import {
  Player2TableAtom,
  Player2HandAtom,
  Player2EffectAtom,
  P2FirstCard,
  P2SecondCard,
  P2ThirdCard,
} from '../../data/Atoms'

const P2Card = ({ drawCardP2 }) => {
  const [P2Hand, setP2Hand] = useAtom(Player2HandAtom)
  const [P2Table, setP2Table] = useAtom(Player2TableAtom)
  const [P2Effect, setP2Effect] = useAtom(Player2EffectAtom)
  const [P2CardA, setP2CardA] = useAtom(P2FirstCard)
  const [P2CardB, setP2CardB] = useAtom(P2SecondCard)
  const [P2CardC, setP2CardC] = useAtom(P2ThirdCard)

  console.log(P2CardA, P2CardB, P2CardC)

  const handleCardClick = (card) => {
    if (card.category === 'effect' && P2Effect.length === 0) {
      setP2Effect([...P2Effect, card])
      setP2Hand(P2Hand.filter((c) => c !== card))
    } else if (card.category !== 'effect' && P2Table.length < 3) {
      setP2Table([...P2Table, card])
      setP2Hand(P2Hand.filter((c) => c !== card))

      if (P2CardA == null) {
        setP2CardA(card)
      } else if ((P2CardB == null && P2CardA) || P2CardC != null) {
        setP2CardB(card)
      } else if ((P2CardC == null && P2CardB != null) || P2CardC != null) {
        setP2CardC(card)
      } else {
        console.log('P2Table is full')
      }
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
