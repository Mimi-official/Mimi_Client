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
// 2. 타이틀 (로그인 -> 회원가입)
// ---------------------------------------------------
const TitleText = styled.div` /* LoginText에서 TitleText로 이름 변경 */
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

// ---------------------------------------------------
// 3. 닉네임 레이아웃 컨테이너 (기존 LoginLayout)
// ---------------------------------------------------
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

// ---------------------------------------------------
// 4. 아이디 레이아웃 컨테이너 (새로 추가)
// ---------------------------------------------------
const IdLayout = styled.div`
  display: flex;
  width: 343px; 
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  position: absolute; 
  left: 32px;  
  top: 315px; /* 닉네임 아래 배치 */
`;

// ---------------------------------------------------
// 5. 비밀번호 레이아웃 컨테이너 (위치 조정)
// ---------------------------------------------------
const PasswordLayout = styled.div`
  display: flex;
  width: 343px; 
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  position: absolute; 
  left: 32px;  
  top: 433px; /* 아이디 아래 배치 (319 + 71 + 30) */
`;

// ---------------------------------------------------
// 6. 레이블 (닉네임/아이디/비밀번호 글자) 스타일
// ---------------------------------------------------
const Label = styled.label`
  color: #4E4E4E; 
  font-family: Pretendard;
  font-size: 16px; 
  font-style: normal;
  font-weight: 600; 
  line-height: normal; 
`;

// ---------------------------------------------------
// 7. 입력 필드 (Input) 스타일
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
    color: #BDBDBD; 
    font-family: Pretendard;
    font-size: 14px; 
    font-style: normal;
    font-weight: 400; 
    line-height: 140%; 
  }
`;

// ---------------------------------------------------
// 8. 가입하기 버튼 스타일 (기존 LoginButton 유지)
// ---------------------------------------------------
const SignupButton = styled.button` /* LoginButton에서 SignupButton으로 이름 변경 */
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


// ---------------------------------------------------
// 9. 버튼 텍스트 스타일
// ---------------------------------------------------
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


// ---------------------------------------------------
// 10. Signup 컴포넌트 (⭐️ 최종 컴포넌트)
// ---------------------------------------------------
const Signup = () => {
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
        />
      </NicknameLayout>

      {/* 아이디 영역 */}
      <IdLayout>
        <Label htmlFor="userId">아이디</Label>
        <InputField 
          id="userId" 
          type="text" 
          placeholder="아이디를 입력해주세요."
        />
      </IdLayout>
      
      {/* 비밀번호 영역 */}
      <PasswordLayout>
        <Label htmlFor="userPw">비밀번호</Label>
        <InputField 
          id="userPw" 
          type="password" 
          placeholder="비밀번호를 입력해주세요."
        />
      </PasswordLayout>
      
      {/* 가입하기 버튼 */}
      <SignupButton>
        <ButtonText>가입하기</ButtonText> {/* 텍스트 변경 */}
      </SignupButton>

      {/* ⭐️ 회원가입 텍스트 (SignupText)는 삭제됨 */}
      
    </Container>
  );
};

export default Signup;