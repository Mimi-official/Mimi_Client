import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackIcon from '../assets/images/back_icon.svg?react';
import ChatSendIcon from "../assets/images/chat_send.svg?react";

const Container = styled.div`
    margin: 0 auto;
    width: 393px;
    height: 852px;
    display: flex;
    flex-direction: column;
    background: #F1F1F1;
`;

const Header = styled.header`
    padding: 11px 20px;
    display: flex;
    gap: 13.76px;
    align-items: center;
    background: #FDFDFD;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.06);
`;

const BackIconBox = styled.div``;

const CharacterName = styled.p`
    color: #FF76BD;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const Main = styled.div`
    display: flex;
    flex: 1;
`;

const ContentChat = styled.div`
    display: flex;
`
const InputChat = styled.div`
    display: flex;
    padding: 23px 20px 23px 24px;
    align-items: flex-start;
    gap: 19px;
    border-radius: 20px 20px 0 0;
    border: 1px solid var(--Grey-300, #CECECE);
    background: #FFF;
`;

const InputText = styled.input`
    display: flexbox;
    flex: 1;
    height: 36px;
    background-color: rgba(106, 106, 112, 0.18);
    border: none;
    border-radius: 10px;
    padding: 0px 15px;
    &:focus {
        outline: none;
    }
`;

const SendBtnWapper = styled.div`
    svg {
        width: 39px;
        height: 39px;
    }
`;

export default function Chat() {
    const navigate = useNavigate();
    const name = "조원빈";
    return (
        <Container>
            <Header>
                <BackIconBox onClick={() => { navigate(-1) }}>
                    <BackIcon />
                </BackIconBox>
                <CharacterName>
                    {name}
                </CharacterName>
            </Header>
            <Main>
                <ContentChat>

                </ContentChat>
            </Main>
            <InputChat>
                <InputText placeholder="내용을 입력하여 대화를 시작해주세요."/>
                <SendBtnWapper>
                    <ChatSendIcon/>
                </SendBtnWapper>
            </InputChat>
        </Container>
    )
};
