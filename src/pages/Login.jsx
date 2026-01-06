import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 390px;
  height: 844px;
  background-color: white;
  margin: 0 auto;
  position: relative; 
`;

const LoginText = styled.div`
  color: #383838;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  left: 50%; 
  transform: translateX(-50%);
  top: 49px;
`;

const Login = () => {
  return (
    <Container>
      <LoginText>로그인</LoginText>
    </Container>
  );
};

export default Login;