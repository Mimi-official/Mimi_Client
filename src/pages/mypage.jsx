import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HomeIcon from "../assets/images/home_icon.svg?react";
import ChatIcon from "../assets/images/chat_icon.svg?react";
import MypageIcon from "../assets/images/mypage_icon.svg?react";
import axios from 'axios';

// Color palette
const PINK = '#FF66C4';
const INACTIVE_GRAY = '#C4C4C4';
const HEADER_BG = '#FDFDFD';
const PAGE_BG = '#FFFFFF';

const Container = styled.div`
    display: flex;
    padding: 12px 0;
    align-items: flex-start;
    padding: 12px 16px;
    border-radius: 20px 20px 0 0;
    border: 1px solid var(--Grey-300, #CECECE);
    background: #FFF;
    justify-content: space-around;
    align-items: center;
`

const MenuBtn = styled.div`
    width: 100%;
    cursor: pointer;
`

const BtnImgWrapper = styled.div`
    justify-content: center;
    display: flex;
    flex: 1;
    svg {
        width: 24px;
        height: 24px;
        path {
            stroke: ${props => props.$activate ? '#FF76BD' : '#9E9E9E'};
        }
    }
`;

const BtnText = styled.p`
    color: ${(props) => props.$activate ? '#FF76BD' : '#9E9E9E'};
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
`;

export function Menu(props) {
    const menu = props.menu;
    const navigate = useNavigate();
    return (
        <Container>
            <MenuBtn onClick={() => navigate('/home')}>
                <BtnImgWrapper $activate={menu == 1}>
                    <HomeIcon />
                </BtnImgWrapper>
                <BtnText $activate={menu == 1}>
                    홈
                </BtnText>
            </MenuBtn>
            <MenuBtn onClick={() => navigate('/chat')}>
                <BtnImgWrapper $activate={menu == 2}>
                    <ChatIcon />
                </BtnImgWrapper>
                <BtnText $activate={menu == 2}>
                    대화
                </BtnText>
            </MenuBtn>
            <MenuBtn onClick={() => navigate('/mypage')}>
                <BtnImgWrapper $activate={menu == 3}>
                    <MypageIcon />
                </BtnImgWrapper>
                <BtnText $activate={menu == 3}>
                    마이페이지
                </BtnText>
            </MenuBtn>
        </Container>
    )
};


// ==========================================
// 3. MyPage 전체 레이아웃
// ==========================================

const ScreenContainer = styled.div`
  width: 393px;
  height: 100vh;
  background-color: #FFFFFF;
  margin: 0 auto;
  position: relative; /* 자식 요소 absolute 배치를 위해 */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
  border: 1px solid #eee; 
  overflow: hidden;
`;

const Header = styled.header`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column; 
  align-items: center;
  background-color: ${HEADER_BG};
`;

const PageTitle = styled.h1`
  font-size: 18px;
  font-weight: 900;
  color: ${PINK};
  margin: 0;
  text-align: center;
  width: 100%;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 0 20px;
  background-color: ${PAGE_BG};
  overflow-y: auto; /* 내용이 길어지면 스크롤 */
  padding-bottom: 90px; /* 네비게이션 바 높이만큼 여백 확보 */
`;

const ProfileCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  border: 1px solid #F0F0F0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  margin-top: 10px;
`;

const AvatarCircle = styled.div`
  width: 64px;
  height: 64px;
  background-color: #D9D9D9;
  border-radius: 55px;
  margin-bottom: 16px;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  font-weight: 500;
  color: #424242;
`;

const EditIcon = styled.div`
  color: #999;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SectionTitle = styled.div`
  font-size: 14px;
  color: #666;
  margin: 30px 0 10px 5px;
`;

const MenuBox = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  border: 1px solid #F0F0F0;
  padding: 10px 0;
`;

const MenuItem = styled.div`
  padding: 14px 20px;
  font-size: 15px;
  color: #888;
  cursor: pointer;
  
  &:active {
    background-color: #f9f9f9;
  }
`;

const IconPencil = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
);

export default function MyPage() {
    const navigate = useNavigate();
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
                    withCredentials: true
                })
                setData(response.data.data);
            }
            catch (e) {
                alert('회원정보가 옳바르지 않습니다.');
                console.log(e);
            }
        }
        fetchData();
    }, [])

    const handleLogout = () => {
        async function logout() {
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout`, 
                    {},
                    { withCredentials: true }
                );

                if (response.status === 200) {
                    alert('로그아웃 성공.');
                    navigate('/')
                }
            }
            catch (e) {
                alert("로그아웃 실패")
                console.log(e)
            }
        }

        if (confirm("정말 로그아웃 하시겠습니까?")) {
            logout();
        }
    }

    const handleDelete = () => {
        async function accountDelete(pw) {
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/delete`, {
                    password: pw
                }, {
                    withCredentials: true
                });

                if (response.status === 200) {
                    alert('회원이 탈퇴되었습니다.');
                    navigate('/')
                }
            }
            catch (e) {
                console.log(e)
            }
        }

        if (confirm("정말 회원탈퇴를 하시겠습니까?")) {
            const password = prompt("본인 확인을 위해 비밀번호를 입력해주세요.")
            if (password.trim()) {
                accountDelete(password);
            }
        }
    }

    return (
        <ScreenContainer>

            <Header>
                <PageTitle>마이페이지</PageTitle>
            </Header>

            <ContentArea>
                <ProfileCard>
                    <AvatarCircle />
                    <NameWrapper>
                        {data?.nickname}
                        <EditIcon onClick={() => { alert("준비중인 기능입니다.") }}><IconPencil /></EditIcon>
                    </NameWrapper>
                </ProfileCard>

                <SectionTitle>내 계정</SectionTitle>
                <MenuBox>
                    <MenuItem onClick={() => { handleLogout() }}>로그아웃</MenuItem>
                    <MenuItem onClick={() => { handleDelete() }}>회원탈퇴</MenuItem>
                </MenuBox>
            </ContentArea>

            <Menu menu={3} />

        </ScreenContainer>
    );
}