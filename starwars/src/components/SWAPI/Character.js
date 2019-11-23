import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const Character = () => {
  const [setCharacter, setCharacterState] = useState([]);
  useEffect(() => {
      axios.get("https://swapi.co/api/people/")
      .then(response => {
          setCharacterState(response.data.results)
          console.log(response.data.results);
      })
      .catch (error => {console.log(error);
      })
  },[]);

  return (
    <div>  
      {setCharacter.map((character, index) => {
        return ( 
          <CharacterCard
          name = {character.name}
          gender = {character.gender}
          height = {character.height}
          mass = {character.mass}
          key={index}
          />
        );
  })}
    </div>
)};

export default Character;