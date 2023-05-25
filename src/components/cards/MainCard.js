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
import MainCardStyles from './MainCardStyles'

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
  const [card2Data, setCard2Data] = useAtom(Card2Atom)

  React.useEffect(() => {
    setCardData(card)
  }, [card, setCardData])

  const minusHp = () => {
    setCardData((prevCardData) => ({
      ...prevCardData,
      hp: (prevCardData.hp || 0) - 1,
    }))
  }

  const minusHpCard2 = () => {
    setCard2Data((prevCard2Data) => ({
      ...prevCard2Data,
      hp: (prevCard2Data.hp || 0) - 1,
    }))
  }

  console.log(card, index)
  return (
    <MainCardStyles>
      <p>{card.name}</p>
      {cardData && <p>{cardData.hp || 0}</p>}
      <button onClick={minusHp}>-1 hp</button>
      <button onClick={minusHpCard2}>-1 hp for Card2Atom</button>
    </MainCardStyles>
  )
}

export default MainCard
