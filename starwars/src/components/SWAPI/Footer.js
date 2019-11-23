// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CharacterCard from "./CharacterCard"

// const Character = () => {
//   const [setCharacter, setCharacterState] = useState([]);
//   useEffect(() => {
//       axios.get("https://swapi.co/api/people/1/")
//       .then(response => {
//           setCharacterState(response.data)
//           console.log(response);
//       })
//       .catch (error => {console.log(error);
//       })
//   },[]);

//   return (
//     <div>
//       <CharacterCard
//       name = {setCharacter.name}
//       gender = {setCharacter.gender}
//       height = {setCharacter.height}
//       mass = {setCharacter.mass}           
//       />
//     </div>
//   );
// };

// export default Character;