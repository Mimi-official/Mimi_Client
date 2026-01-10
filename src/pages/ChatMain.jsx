import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChatListBox from "../components/ChatListBox";
import Menu from "../components/Menu";

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

export default function Chat() {
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
            <Menu menu={2}/>
        </Container>
    )
};
