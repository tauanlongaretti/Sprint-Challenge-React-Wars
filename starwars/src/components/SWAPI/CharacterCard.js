import React from "react";


const CharacterCard = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.gender}</p>
            <p>{props.height}</p>
            <p>{props.mass}</p>
        </div>
    );    
}

export default CharacterCard;