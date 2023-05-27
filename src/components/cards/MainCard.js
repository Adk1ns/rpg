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
import { Player1TableAtom, Player2TableAtom } from '../../data/Atoms'

const cardAtoms = [
  Card0Atom,
  Card1Atom,
  Card2Atom,
  Card3Atom,
  Card4Atom,
  Card5Atom,
]

const MainCard = ({ card, index, onCardDestroyed }) => {
  const [cardData, setCardData] = useAtom(cardAtoms[index])
  const [viewState, setViewState] = React.useState('attack')

  React.useEffect(() => {
    setCardData(card)
  }, [card, setCardData])

  const handleCardDestroyed = () => {
    const adjustedIndex = index >= 3 ? index - 3 : index
    onCardDestroyed(adjustedIndex)
  }

  React.useEffect(() => {
    if (cardData && cardData.hp === 0) {
      setViewState('dead')
    } else {
      setViewState('attack')
    }
  }, [cardData])

  const shouldRenderAttack1 = (idx) => {
    if ((index <= 2 && idx >= 3) || (index >= 3 && idx <= 2)) {
      return true
    }
    return false
  }

  const renderAttackButtons = () => {
    return cardAtoms.map((atom, i) => {
      if (shouldRenderAttack1(i)) {
        // Generate a unique key based on card's ID or index
        const attackKey = `${card.id || index}-attack-${i}`
        return <Attack1 key={attackKey} cardAtom={atom} attCard={card} />
      }
      return null
    })
  }

  return (
    <MainCardStyles>
      <p>{card.name}</p>
      {cardData && <p>{cardData.hp || 0}</p>}
      {viewState === 'attack' && renderAttackButtons()}
      {viewState === 'dead' && (
        <button onClick={handleCardDestroyed}>Remove Card</button>
      )}
    </MainCardStyles>
  )
}

export default MainCard
