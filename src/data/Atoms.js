import { atom } from 'jotai'
import DeckOne from '../data/decks/DeckOne.json'
import DeckTwo from '../data/decks/DeckTwo.json'

export const Player1HandAtom = atom([])
export const Player2HandAtom = atom([])

export const Player1DeckAtom = atom(DeckOne.Cards)
export const Player2DeckAtom = atom(DeckTwo.Cards)

export const Player1TableAtom = atom([])
export const Player2TableAtom = atom([])

export const Player1EffectAtom = atom([])
export const Player2EffectAtom = atom([])

export const Card0Atom = atom()
export const Card1Atom = atom()
export const Card2Atom = atom()
export const Card3Atom = atom()
export const Card4Atom = atom()
export const Card5Atom = atom()

export const CardsAtom = atom([])

export const P1FirstCard = atom()
export const P1SecondCard = atom()
export const P1ThirdCard = atom()

export const P2FirstCard = atom()
export const P2SecondCard = atom()
export const P2ThirdCard = atom()
