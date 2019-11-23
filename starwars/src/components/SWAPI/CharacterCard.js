import React from "react";
import styled from 'styled-components';

const PaddingDiv = styled.div`
  padding: 1.5%;
`;

const CharacterCard = (props) => {
    return (
        <PaddingDiv>
            <h3>{props.name}</h3>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
        </PaddingDiv>
    );    
}

export default CharacterCard;