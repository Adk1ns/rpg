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
import Attack1 from './MainCardComponents/Attack1'

const cardAtoms = [
  Card0Atom,
  Card1Atom,
  Card2Atom,
  Card3Atom,
  Card4Atom,
  Card5Atom,
]

////////////////////////////////////////////////////////////////////////

const MainCard = ({ card, index }) => {
  const [cardData, setCardData] = useAtom(cardAtoms[index])
  const [viewState, setViewState] = React.useState('attack')

  React.useEffect(() => {
    setCardData(card)
  }, [card, setCardData])

  console.log(card, index)

  const shouldRenderAttack1 = (idx) => {
    if (index <= 2 && idx >= 3 && idx <= 5) {
      return true
    } else if (index >= 3 && idx <= 2) {
      return true
    }
    return false
  }

  return (
    <MainCardStyles>
      <p>{card.name}</p>
      {cardData && <p>{cardData.hp || 0}</p>}
      {viewState === 'attack' && (
        <>
          {cardAtoms.map(
            (atom, i) =>
              shouldRenderAttack1(i) && (
                <Attack1 key={i} cardAtom={atom} attCard={card} />
              )
          )}
        </>
      )}
    </MainCardStyles>
  )
}

export default MainCard
