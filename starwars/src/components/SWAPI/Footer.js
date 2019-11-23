import React from 'react';
import FooterCard from "./FooterCard"
import styled from 'styled-components';

const MarginBottomDiv = styled.div`
  margin-bottom: 5%;
`;

const Footer = () => {
  
  return (
    <MarginBottomDiv>
      <FooterCard         
      />
    </MarginBottomDiv>
  );
};

export default Footer;