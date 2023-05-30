import React from 'react'
import { arrayData } from '../../data/DataApi'
import CharacterCard from '../CharacterCard/CharacterCard'

const MapCards = () => {
    const [characterList, setCharacterList] = React.useState(arrayData)
    console.log("main",characterList)

  return (
    <>
    {characterList.map((character)=>
      
        (<li><CharacterCard key={character.id} character={character}/></li>))}
    </>
  )
}

export default MapCards