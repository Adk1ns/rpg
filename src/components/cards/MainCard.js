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

const MinusHpButton = ({ cardAtom }) => {
  const [cardData, setCardData] = useAtom(cardAtom)
  const card = cardAtom[0] // Extract the card object from the atom

  const minusHp = () => {
    setCardData((prevCardData) => {
      if (prevCardData.hp) {
        return {
          ...prevCardData,
          hp: prevCardData.hp - 1,
        }
      }
      return prevCardData
    })
  }

  if (!cardData || !cardData.hp) {
    return null // If the atom has no HP value, don't render the button
  }

  return <button onClick={minusHp}>-1 hp {cardData.name}</button>
}

const MainCard = ({ card, index }) => {
  const [cardData, setCardData] = useAtom(cardAtoms[index])
  const [viewState, setViewState] = React.useState('attack')

  React.useEffect(() => {
    setCardData(card)
  }, [card, setCardData])

  console.log(card, index)

  return (
    <MainCardStyles>
      <p>{card.name}</p>
      {cardData && <p>{cardData.hp || 0}</p>}
      {viewState === 'attack' && (
        <>
          {cardAtoms.map((atom, i) => (
            <MinusHpButton key={i} cardAtom={atom} />
          ))}
        </>
      )}
    </MainCardStyles>
  )
}

export default MainCard
