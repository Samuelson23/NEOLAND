import "./CharacterCard.css"
import React from 'react'

const CharacterCard = (props) => {
    const {character}=props
    console.log("dataaaaa", character.name)
    

  return (
    <div key={character.id} className="cardCharacter">
        <h3>{character.name}</h3>
        <img src={character.image} alt={character.name}/>
        <p>Gender: {character.gender}</p>
        <p>Race: {character.species} </p>
        {character.status=="Alive" ? <p className="alive">Status: {character.status} </p> : <p className="noAlive">Status: {character.status} </p>}
    </div> 
  )
}

export default CharacterCard