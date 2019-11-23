import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';

const DisplayDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

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
    <DisplayDiv>  
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
    </DisplayDiv>
)};

export default Character;