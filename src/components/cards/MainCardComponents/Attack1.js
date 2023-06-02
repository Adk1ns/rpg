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

const Attack1 = ({ cardAtom, attCard }) => {
  const [cardData, setCardData] = useAtom(cardAtom)

  const minusHp = () => {
    setCardData((prevCardData) => {
      if (prevCardData.hp) {
        const option = attCard.options.find((opt) => opt.id === 1)
        const accuracy = option ? attCard.options[0].accuracy : 100
        const attackValue = option ? attCard.options[0].attack : 7
        const effect = option ? attCard.options[0].effect : null

        const successChance = Math.random() * 100
        if (successChance <= accuracy) {
          console.log(prevCardData, attCard, Math.random() * 100 <= 50)
          // Attack is successful
          if (Math.random() * 100 <= 70) {
            // There is a 30% chance to update the card status to the effect
            return {
              ...prevCardData,
              hp: prevCardData.hp - attackValue,
              status: effect,
            }
          } else {
            return {
              ...prevCardData,
              hp: prevCardData.hp - attackValue,
            }
          }
        }
      }
      return prevCardData
    })
  }

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

  const option = cardData.options.find((opt) => opt.id === 1)
  const option2 = cardData.options.find((opt) => opt.id === 2)

  return (
    <>
      <button onClick={minusHp}>{cardData.name}</button>
      <button onClick={minusHp2}>
        {option2 && option2.title} {cardData.name}
      </button>
    </>
  )
}

export default Attack1
