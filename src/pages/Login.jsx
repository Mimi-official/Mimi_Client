import React from 'react';
import styled from 'styled-components';

// ---------------------------------------------------
// 1. 전체 컨테이너
// ---------------------------------------------------
const Container = styled.div`
  width: 390px;
  height: 844px;
  background-color: white;
  margin: 0 auto;
  position: relative; 
`;

// ---------------------------------------------------
// 2. 로그인 타이틀
// ---------------------------------------------------
const LoginText = styled.div`
  color: #383838;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600; /* 시각적 일치를 위해 500으로 설정 */
  line-height: normal;

  position: absolute; 
  left: 50%; 
  transform: translateX(-50%); 
  top: 49px; 
`;

// ---------------------------------------------------
// 3. 아이디 레이아웃 컨테이너
// ---------------------------------------------------
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

// ---------------------------------------------------
// 4. 비밀번호 레이아웃 컨테이너
// ---------------------------------------------------
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

// ---------------------------------------------------
// 5. 레이블 (아이디/비밀번호 글자) 스타일 (⭐️ 복구됨)
// ---------------------------------------------------
const Label = styled.label`
  color: #4E4E4E; /* 짙은 회색으로 복구 */
  font-family: Pretendard;
  font-size: 16px; /* 16px로 복구 */
  font-style: normal;
  font-weight: 600; /* 500으로 복구 */
  line-height: normal; 
`;

// ---------------------------------------------------
// 6. 입력 필드 (Input) 스타일 (플레이스홀더만 회색으로 유지)
// ---------------------------------------------------
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
    border-color: #4E4E4E; 
    box-shadow: 0 0 0 1px #4E4E4E; 
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

// ---------------------------------------------------
// 7. 로그인 버튼 스타일 (⭐️ 새로운 명세 적용 완료)
// ---------------------------------------------------
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
  top: 700; 
`;


// ---------------------------------------------------
// 8. 버튼 텍스트 스타일 (⭐️ 새로 추가됨)
// ---------------------------------------------------
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


// ---------------------------------------------------
// 9. 회원가입 텍스트 스타일 (⭐️ 새로 추가됨)
// ---------------------------------------------------
const SignupText = styled.a`
  position: absolute;
  left: 170px; /* ⭐️ X 좌표 적용 */
  top: 767px; /* ⭐️ Y 좌표 적용 */

  color: #A7ABA8; /* 명세 색상 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none; /* 링크 밑줄 제거 */
  cursor: pointer;
`;

// ---------------------------------------------------
// 10. Login 컴포넌트
// ---------------------------------------------------
const Login = () => {
  return (
    <Container>
      <LoginText>로그인</LoginText>
      
      {/* 아이디 영역 */}
      <LoginLayout>
        <Label htmlFor="userId">아이디</Label>
        <InputField 
          id="userId" 
          type="text" 
          placeholder="아이디를 입력해주세요."
        />
      </LoginLayout>
      
      {/* 비밀번호 영역 */}
      <PasswordLayout>
        <Label htmlFor="userPw">비밀번호</Label>
        <InputField 
          id="userPw" 
          type="password" 
          placeholder="비밀번호를 입력해주세요."
        />
      </PasswordLayout>

      {/* 로그인 버튼 (내부에 ButtonText 적용) */}
      <LoginButton>
        <ButtonText>로그인</ButtonText>
      </LoginButton>

      {/* ⭐️ 회원가입 텍스트 추가 */}
      <SignupText href="#">회원가입</SignupText>

    </Container>
  );
};



export default Login;