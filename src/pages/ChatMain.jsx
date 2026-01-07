import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChatListBox from "../components/ChatListBox";
import HomeIconGray from "../assets/images/home_icon_gray.svg?react";
import ChatIconPink from "../assets/images/chat_icon_pink.svg?react";
import MypageIconGray from "../assets/images/mypage_icon_gray.svg?react";

const Container = styled.div`
    margin: 0 auto;
    width: 393px;
    height: 852px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.p`
    color: #FF76BD;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 20px;
    text-align: center;
    background: var(--WHITE-01, #FDFDFD);
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.06);
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 22px;
`;

const Menu = styled.div`
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
`

const BtnImgWrapper = styled.div`
    justify-content: center;
    display: flex;
    flex: 1;
    svg {
        width: 24px;
        height: 24px;
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

export default function Chat() {
    const navigate = useNavigate();
    const data = [
        { id: 1, img: null, name: '조원빈', lastchat: '그래서 넌 무슨 말 좋아해??', },
        { id: 2, img: null, name: '강서현', lastchat: '나랑 같이 "이 멋진 세계에 축복을!" 극장판 보러가지 않을래??'},
        { id: 3, img: null, name: '민정원', lastchat: '아아아악!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'}
    ];
    return (
        <Container>
            <Title>
                대화를 이어가세요!
            </Title>
            <Main>
                {data.map((item) => {
                    return (
                        <ChatListBox key={item.id} item={item} />
                    )
                })}
            </Main>
            <Menu>
                <MenuBtn onClick={() => navigate('/home')}>
                    <BtnImgWrapper>
                        <HomeIconGray />
                    </BtnImgWrapper>
                    <BtnText $activate={false}>
                        홈
                    </BtnText>
                </MenuBtn>
                <MenuBtn onClick={() => navigate('/chat')}>
                    <BtnImgWrapper>
                        <ChatIconPink />
                    </BtnImgWrapper>
                    <BtnText $activate={true}>
                        대화
                    </BtnText>
                </MenuBtn>
                <MenuBtn onClick={() => navigate('/mypage')}>
                    <BtnImgWrapper>
                        <MypageIconGray />
                    </BtnImgWrapper>
                    <BtnText $activate={false}>
                        마이페이지
                    </BtnText>
                </MenuBtn>
            </Menu>
        </Container>
    )
};
