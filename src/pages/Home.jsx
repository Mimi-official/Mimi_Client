import React from 'react';
import styled from 'styled-components';
import MiniLogo from '../assets/images/Mimi_Logo.png';

//스타일
const Container = styled.div`
  width: 390px;
  height: 844px; 

  background-color: #FF76BD;

  margin: 0 auto; 
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center;     /* 세로 중앙 정렬 */
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const Home = () => {
  return (
    <Container>
      <Logo src={MiniLogo} alt="Mini Logo" />
    </Container>
  );
};

export default Home;