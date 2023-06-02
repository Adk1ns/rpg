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
import Attack2 from './MainCardComponents/Attack2'
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
  const [state, setState] = React.useState('wait')
  // const [blockState, setBlockState] = React.useState('hi')

  React.useEffect(() => {
    setCardData(card)
  }, [])

  React.useEffect(() => {
    if (cardData && cardData.hp <= 0) {
      setState('dead')
    } else {
      setState('wait')
      const timer = setTimeout(() => {
        setState('attack')
      }, cardData && 5000 - cardData.speed)
      return () => clearTimeout(timer)
    }
  }, [cardData])

  const shouldRenderAttack1 = (idx) => {
    if ((index <= 2 && idx >= 3) || (index >= 3 && idx <= 2)) {
      return true
    }
    return false
  }

  const resetAttTimer = () => {
    setState('wait')
    const timer = setTimeout(() => {
      setState('attack')
    }, 5000 - cardData.speed)
    return () => clearTimeout(timer)
  }

  const renderAttackButtons = () => {
    return cardAtoms.map((atom, i) => {
      if (shouldRenderAttack1(i)) {
        const attackKey = `${card.id || index}-attack-${i}`
        return (
          <div key={attackKey} onClick={resetAttTimer}>
            <Attack1 key={attackKey} cardAtom={atom} attCard={card} />
          </div>
        )
      }
      return null
    })
  }

  // const handleBlockClick = () => {
  //   console.log(blockState)
  //   setBlockState('blocking')
  //   setTimeout(() => {
  //     setBlockState('blocked')
  //     setTimeout(() => {
  //       setBlockState('')
  //     }, 3000)
  //   }, 3000)
  // }

  return (
    <MainCardStyles>
      <p>{card.name}</p>
      {cardData && <p>{cardData.hp || 0}</p>}
      {state === 'attack' && renderAttackButtons()}
      {state === 'dead' && (
        <>
          <button onClick={() => onCardDestroyed(card.id)}>Remove Card</button>
          <p>Dead</p>
        </>
      )}
      {state === 'wait' && <p>Waiting</p>}
      {/* <button onClick={handleBlockClick}>Block</button>
      <p>{blockState}</p> */}
    </MainCardStyles>
  )
}

export default MainCard
