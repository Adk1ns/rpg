import React from 'react'
import { useAtom } from 'jotai'
import {
  Player1TableAtom,
  Player1HandAtom,
  Player1EffectAtom,
  P1FirstCard,
  P1SecondCard,
  P1ThirdCard,
} from '../../data/Atoms'

const P1Card = ({ drawCardP1 }) => {
  const [P1Hand, setP1Hand] = useAtom(Player1HandAtom)
  const [P1Table, setP1Table] = useAtom(Player1TableAtom)
  const [P1Effect, setP1Effect] = useAtom(Player1EffectAtom)
  const [P1CardA, setP1CardA] = useAtom(P1FirstCard)
  const [P1CardB, setP1CardB] = useAtom(P1SecondCard)
  const [P1CardC, setP1CardC] = useAtom(P1ThirdCard)

  console.log(P1CardA, P1CardB, P1CardC)
  // console.log(P1Effect)

  const handleCardClick = (card) => {
    if (card.category === 'effect' && P1Effect.length === 0) {
      setP1Effect([...P1Effect, card])
      setP1Hand(P1Hand.filter((c) => c !== card))
    } else if (card.category !== 'effect' && P1Table.length < 3) {
      //add these values to P1CardA, P1CardB, P1CardC in this part of the if statement. Each can only hold 1 value at a time.
      setP1Table([...P1Table, card])
      setP1Hand(P1Hand.filter((c) => c !== card))
      //if P1CardA is empty, add the card to P1CardA
      if (P1CardA == null) {
        setP1CardA(card)
      } else if (P1CardB == null && P1CardA !== null && P1CardC !== null) {
        setP1CardB(card)
      } else if (P1CardC == null && P1CardB !== null && P1CardA !== null) {
        setP1CardC(card)
      } else {
        console.log('P1Table is full')
      }
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
