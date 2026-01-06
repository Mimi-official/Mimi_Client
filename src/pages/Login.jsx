import React from 'react';
import styled from 'styled-components';

// 전체 컨테이너
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 모바일 화면을 가정하여 최대 너비를 설정할 수 있습니다. */
  /* max-width: 400px; */
  margin: 0 auto;
  padding: 20px;
  background-color: white; /* 배경이 흰색인 경우 */
`;

// 페이지 제목 (로그인)
const Title = styled.h1`
  /* ⭐️⭐️ Figma 텍스트 속성 (로그인 글자) 반영 ⭐️⭐️ */
  width: 52px; 
  height: 24px; 
  font-family: 'Pretendard', sans-serif; 
  font-size: 20px; 
  font-weight: 600; 
  line-height: 100%; 
  letter-spacing: 0%; 
  color: #383838; 
  /* ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ */

  margin-top: 30px;
  margin-bottom: 50px;
  /* Figma에서 너비가 52px로 고정되어 있으므로, text-align: center를 유지합니다. */
  text-align: center;
`;

// 입력 그룹 (아이디/비밀번호 레이블 + 입력창)
const InputGroup = styled.div`
  width: 100%;
  max-width: 328px; /* 버튼과 너비를 맞추기 위해 */
  margin-bottom: 25px;
`;

// 입력창 레이블 (아이디, 비밀번호)
const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333; /* 글자 색상 */
`;

// 입력 필드 (아이디 입력창, 비밀번호 입력창)
const Input = styled.input`
  width: 100%;
  padding: 15px; /* 높이 확보 */
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box; /* 패딩이 너비에 포함되도록 */
  &::placeholder {
    color: #bbb;
  }
`;

// 로그인 버튼 (이전 질문에서 수정한 Figma 속성 적용 - 그대로 유지)
const LoginButton = styled.button`
  /* Figma 속성 적용: 너비 328px, 높이 50px, 패딩 14px 78px, 반경 20px */
  width: 328px; 
  height: 50px; 
  padding: 14px 78px; 
  border-radius: 20px; 

  /* Figma 색상 적용: #FF76BD */
  background-color: #FF76BD; 

  color: white;
  font-size: 1.1rem; 
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 20px; /* 입력창과 버튼 사이 간격 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  /* 텍스트 중앙 정렬 */
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

// 회원가입 링크
const SignupLink = styled.a`
  font-size: 0.9rem;
  color: #888;
  text-decoration: none;
  margin-top: 20px; 
  cursor: pointer;
  
  /* 버튼과 회원가입 링크 사이의 간격 */
  margin-bottom: 50px; 
`;


// --- 🚀 React 컴포넌트 ---
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 로그인 로직을 추가합니다.
    console.log('로그인 버튼 클릭됨');
  };

  return (
    <Container>
      {/* Title 컴포넌트에 수정된 스타일이 적용됩니다. */}
      <Title>로그인</Title>
      <form onSubmit={handleSubmit}>
        
        {/* 아이디 입력 필드 */}
        <InputGroup>
          <Label htmlFor="id">아이디</Label>
          <Input
            id="id"
            type="text"
            placeholder="아이디를 입력해주세요."
            required
          />
        </InputGroup>

        {/* 비밀번호 입력 필드 */}
        <InputGroup>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            required
          />
        </InputGroup>

        {/* 로그인 버튼 */}
        <LoginButton type="submit">로그인</LoginButton>
      </form>

      {/* 회원가입 링크 */}
      <SignupLink href="/signup">
        회원가입
      </SignupLink>
    </Container>
  );
};

export default Login;