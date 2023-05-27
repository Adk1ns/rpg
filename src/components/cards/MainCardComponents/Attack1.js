import React from 'react'
import { useAtom } from 'jotai'

const Attack1 = ({ cardAtom, attCard }) => {
  const [cardData, setCardData] = useAtom(cardAtom)

  const minusHp = () => {
    setCardData((prevCardData) => {
      if (prevCardData.hp) {
        const option = attCard.options.find((opt) => opt.id === 1)
        const accuracy = option ? attCard.options[0].accuracy : 100 // Use the accuracy value from the option if found, otherwise default to 100
        const attackValue = option ? attCard.options[0].attack : 7
        console.log('attCard', attCard, attCard.options[0].effect)

        // Calculate the likelihood of the attack being successful based on accuracy
        const successChance = Math.random() * 100 // Generate a random number between 0 and 100
        if (successChance <= accuracy) {
          // Attack is successful
          //add code to add effect with attack, a 50% chance prevCardData will be equal to attCard.options[0].effect
          return {
            ...prevCardData,
            hp: prevCardData.hp - attackValue,
          }
        }
        console.log('attCard', attCard, attCard.options[0].effect)
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

  if (!cardData || !cardData.hp) {
    return null // If the atom has no HP value, don't render the button
  }

  const option = cardData.options.find((opt) => opt.id === 1)
  const option2 = cardData.options.find((opt) => opt.id === 2)

  return (
    <>
      <button onClick={minusHp}>
        {option && option.title} {cardData.name}
      </button>
      <button onClick={minusHp2}>
        {option2 && option2.title} {cardData.name}
      </button>
    </>
  )
}

export default Attack1
