import React from 'react'
import { useAtom } from 'jotai'

const Attack1 = ({ cardAtom, attCard }) => {
  const [cardData, setCardData] = useAtom(cardAtom)

  const minusHp = () => {
    setCardData((prevCardData) => {
      if (prevCardData.hp) {
        const option = prevCardData.options.find((opt) => opt.id === 1) // Find the option with id 1
        const attackValue = option ? option.attack : 0 // Use the attack value from the option if found, otherwise default to 0
        return {
          ...prevCardData,
          hp: prevCardData.hp - attackValue,
        }
      }
      return prevCardData
    })
  }

  if (!cardData || !cardData.hp) {
    return null // If the atom has no HP value, don't render the button
  }

  const option = cardData.options.find((opt) => opt.id === 1) // Find the option with id 1

  return (
    <button onClick={minusHp}>
      {option && option.title} {cardData.name}
    </button>
  )
}

export default Attack1
