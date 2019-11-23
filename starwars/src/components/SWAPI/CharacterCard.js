import React from "react";
import styled from 'styled-components';

const PaddingDiv = styled.div`
  padding: 2%;
`;

const CharacterCard = (props) => {
    return (
        <PaddingDiv>
            <h3>{props.name}</h3>
            <p>{props.gender}</p>
            <p>{props.height}</p>
            <p>{props.mass}</p>
        </PaddingDiv>
    );    
}

export default CharacterCard;