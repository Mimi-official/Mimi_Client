import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// 전체 컨테이너
const Container = styled.div`
  width: 390px;
  height: 100vh;
  background-color: white;
  margin: 0 auto;
  position: relative; 
`;

// 로그인 타이틀
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

// 아이디 레이아웃 컨테이너
const LoginLayout = styled.div`
  display: flex;
  width: 343px; 
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  position: absolute; 
  left: 32px; 
  top: 207px; 
`;

// 비밀번호 레이아웃 컨테이너
const PasswordLayout = styled.div`
  display: flex;
  width: 343px; 
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  position: absolute; 
  left: 32px;  
  top: 319px; 
`;

// 레이블 (아이디/비밀번호 글자) 스타일 
const Label = styled.label`
  color: #4E4E4E; 
  font-family: Pretendard;
  font-size: 16px; 
  font-style: normal;
  font-weight: 600; 
  line-height: normal; 
`;

// 입력 필드 (Input) 스타일 
const InputField = styled.input`
  box-sizing: border-box; 
  width: 100%; 
  padding: 12px 16px;
  border-radius: 15px;
  border: 1px solid #E9E9E9; 
  background: #FFF; 
  line-height: 140%; 

  font-family: Pretendard;
  font-size: 16px; 
  font-weight: 500; 
  color: #383838; 
  
  &:focus {
    outline: none; 
    border-color: #E9E9E9; 
    box-shadow: none; 
  }

  &::placeholder {
    color: #BDBDBD; /* 플레이스홀더만 밝은 회색 유지 */
    font-family: Pretendard;
    font-size: 14px; 
    font-style: normal;
    font-weight: 400; 
    line-height: 140%; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

// 로그인 버튼 스타일
const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; 
  
  width: 328px; 
  padding: 14px 78px; 
  border-radius: 20px; 
  background: #FF76BD; 
  border: none;
  cursor: pointer;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 700px; 
`;

// 버튼 텍스트 스타일 
const ButtonText = styled.span`
  width: 168px;
  flex-shrink: 0;
  color: #FFF;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700; /* Bold */
  line-height: 140%; 
`;

// 회원가입 텍스트 스타일 
const SignupText = styled.a`
  position: absolute;
  left: 170px; 
  top: 767px; 

  color: #A7ABA8; 
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none; /* 링크 밑줄 제거 */
  cursor: pointer;
`;

// Login 컴포넌트
const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = { password: userPw, username: userId };
    console.log('로그인 시도 데이터 : ', data);
    async function login() {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`,
          data,
          {
            withCredentials: true
          }
        );

        if (response.status === 200) {
          alert('로그인 성공');
          navigate('/home');
        }
      }
      catch (error) {
        if (error.response.status == 401) {
          alert('아이디 또는 비밀번호가 일치하지 않습니다');
        }
        else {
          alert('로그인 과정에서 에러가 발생했습니다');
          console.log('에러 발생 : ', error);
        }
      }
    }
    login();
  }

  return (
    <Container>
      <form onSubmit={(e) => { handleLogin(e) }}>
        <LoginText>로그인</LoginText>

        {/* 아이디 영역 */}
        <LoginLayout>
          <Label htmlFor="userId">아이디</Label>
          <InputField
            id="userId"
            type="text"
            placeholder="아이디를 입력해주세요."
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </LoginLayout>

        {/* 비밀번호 영역 */}
        <PasswordLayout>
          <Label htmlFor="userPw">비밀번호</Label>
          <InputField
            id="userPw"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => setUserPw(e.target.value)}
            required
          />
        </PasswordLayout>

        {/* 로그인 버튼 (내부에 ButtonText 적용) */}
        <LoginButton type="submit">
          <ButtonText>로그인</ButtonText>
        </LoginButton>

        {/* 회원가입 텍스트 */}
        <SignupText href="#" onClick={() => navigate('/signup')}>회원가입</SignupText>
      </form>
    </Container>
  );
};

export default Login;