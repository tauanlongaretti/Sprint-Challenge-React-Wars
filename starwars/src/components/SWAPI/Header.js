import React from "react";
import HeaderCard from "./HeaderCard";
import styled from 'styled-components';

const MarginDiv = styled.div`
  margin: 3%;
`;


const Header = () => {

  return (
    <MarginDiv>  
          <HeaderCard />
    </MarginDiv>
)};

export default Header;