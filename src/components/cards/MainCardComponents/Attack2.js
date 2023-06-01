import React from 'react'
import { useAtom } from 'jotai'
// import {
//   BlockP1A,
//   BlockP1B,
//   BlockP1C,
//   BlockP2A,
//   BlockP2B,
//   BlockP2C,
// } from '../../../data/Atoms'

const Attack2 = ({ cardAtom, attCard }) => {
  const [cardData, setCardData] = useAtom(cardAtom)

  const minusHp2 = () => {
    setCardData((prevCardData) => {
      if (prevCardData.hp) {
        const option = attCard.options.find((opt) => opt.id === 1)
        const accuracy = option ? attCard.options[1].accuracy : 100
        const attackValue = option ? attCard.options[1].attack : 0

        const successChance = Math.random() * 100
        if (successChance <= accuracy) {
          // Attack is successful
          return {
            ...prevCardData,
            hp: prevCardData.hp - attackValue,
          }
        }
      }
      return prevCardData
    })
  }

  if (!cardData || cardData.hp < 0) {
    return null // If the atom has no HP value, don't render the button
  }

  const option2 = cardData.options.find((opt) => opt.id === 2)

  return (
    <>
      <button onClick={minusHp2}>
        {option2 && option2.title} {cardData.name}
      </button>
    </>
  )
}

export default Attack2
