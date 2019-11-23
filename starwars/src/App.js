import React from 'react';
import './App.css';
import Character from "./components/SWAPI/Character"
import Header from "./components/SWAPI/Header"
import Footer from "./components/SWAPI/Footer"
import styled from 'styled-components';

const WrapperDiv = styled.div`
  font-family: sans-serif;
  font-size: 1.8vw;
  line-height: 1.5;
  background-size: auto;
  text-shadow: 1px 1px white;
  background-color: rgba(255, 255, 255, 0.5);
  margin: auto 5%;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <WrapperDiv className="App">
      <h1 className="Header">React Wars</h1>
      <Header />
      <Character />
      <Footer />
    </WrapperDiv>
  );
}

export default App;
