import React from 'react'
import { useAtom } from 'jotai'
import {
  Card0Atom,
  Card1Atom,
  Card2Atom,
  Card3Atom,
  Card4Atom,
  Card5Atom,
} from '../../data/Atoms'

const cardAtoms = [
  Card0Atom,
  Card1Atom,
  Card2Atom,
  Card3Atom,
  Card4Atom,
  Card5Atom,
]

const MainCard = ({ card, index }) => {
  const [cardData, setCardData] = useAtom(cardAtoms[index])

  React.useEffect(() => {
    setCardData(card)
  }, [card, setCardData])

  const minusHp = () => {
    setCardData({ ...cardData, hp: cardData.hp - 1 })
  }

  console.log(card, index)
  return (
    <div>
      <p>{card.name}</p>
      {cardData && <p>{cardData.hp}</p>}
      <button onClick={minusHp}>-1 hp</button>
    </div>
  )
}

export default MainCard
