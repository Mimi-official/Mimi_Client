import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MiniLogo from '../assets/images/Mimi_Logo.png';

// 스타일
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

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1.5초 후 /login 경로로 이동
    const timer = setTimeout(() => {
      navigate('/login');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container>
      <Logo src={MiniLogo} alt="Mini Logo" />
    </Container>
  );
};

export default Intro;