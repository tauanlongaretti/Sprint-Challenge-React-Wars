import React from "react";

const CharacterCard = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.gender}</p>
      <p>{props.height}</p>
      <p>{props.mass}</p>  
    </div>
    );
};

export default CharacterCard;