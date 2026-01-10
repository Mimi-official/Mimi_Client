import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// 전체 컨테이너
const Container = styled.div`
  width: 390px;
  background-color: white;
  margin: 0 auto;
  position: relative; 
`;

// 타이틀
const TitleText = styled.div` 
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

// 닉네임 레이아웃 컨테이너
const NicknameLayout = styled.div`
  display: flex;
  width: 343px; 
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  position: absolute; 
  left: 32px; 
  top: 203px; 
`;

// 아이디 레이아웃 컨테이너 
const IdLayout = styled.div`
  display: flex;
  width: 343px; 
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  position: absolute; 
  left: 32px;  
  top: 315px; 
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
  top: 433px; 
`;

// 레이블 (닉네임/아이디/비밀번호 글자) 스타일
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
    color: #BDBDBD; 
    font-family: Pretendard;
    font-size: 14px; 
    font-style: normal;
    font-weight: 400; 
    line-height: 140%; 
  }
`;

// 가입하기 버튼 스타일 
const SignupButton = styled.button` 
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
  font-weight: 700; 
  line-height: 140%; 
`;

// Signup 컴포넌트 
const Signup = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userNick, setUserNick] = useState("");

  const handleSignup = () => {
    const data = { nickname: userNick, password: userPw, username: userId, };
    async function login() {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`,
          data,
          {
            withCredentials: true
          }
        );
        console.log('요청 성공');
        if (response.status === 201) {
          alert('회원가입 성공!');
          navigate('/login');
        }
      }
      catch (error) {
        if (error.response.status === 400) {
          alert('이미 존재하는 아이디입니다.');
        }
        else {
          console.log('에러 발생 : ', error);
        }
      }
    }
    login();
  }

  return (
    <Container>
      <TitleText>회원가입</TitleText>

      {/* 닉네임 영역 */}
      <NicknameLayout>
        <Label htmlFor="nickname">닉네임</Label>
        <InputField
          id="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요."
          minLength={2}
          onChange={(e) => setUserNick(e.target.value)}
        />
      </NicknameLayout>

      {/* 아이디 영역 */}
      <IdLayout>
        <Label htmlFor="userId">아이디</Label>
        <InputField
          id="userId"
          type="text"
          placeholder="아이디를 입력해주세요."
          minLength={3}
          maxLength={20}
          onChange={(e) => setUserId(e.target.value)}
        />
      </IdLayout>

      {/* 비밀번호 영역 */}
      <PasswordLayout>
        <Label htmlFor="userPw">비밀번호</Label>
        <InputField
          id="userPw"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          minLength={6}
          onChange={(e) => setUserPw(e.target.value)}
        />
      </PasswordLayout>

      {/* 가입하기 버튼 */}
      <SignupButton onClick={() => handleSignup()}>
        <ButtonText>가입하기</ButtonText>
      </SignupButton>

    </Container>
  );
};

export default Signup;