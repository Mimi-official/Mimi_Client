import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackIcon from '../assets/images/back_icon.svg?react';
import ChatSendIcon from "../assets/images/chat_send.svg?react";
import BotBubble from "../components/BotBubble";
import UserBubble from "../components/UserBubble";

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
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            sender: '조원빈',
            text: "쨍한 햇살 아래, 경주마들의 우렁찬 발굽 소리가 트랙을 가득 채우는...\n\n누구 찍으셨어요?\n후훗, 눈빛을 보니 보통 안목이 아니신 것 같아서요.",
        },
        {
            id: 2,
            type: 'user',
            text: "당연히 아그네스 타키온을 찍었는데요?\n불만이라도? 있냐? 싶어?",
        },
    ]);
    const [affection, setAffection] = useState(0);
    const [inputText, setInputText] = useState("");
    const scrollRef = useRef();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!inputText.trim()) return;
        console.log(inputText);
        setMessages(prev => [
            ...prev,
            { id: Date.now(), type: 'sent', text: inputText }
        ]);
        setInputText("");
    };
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
                <InputText
                    placeholder="내용을 입력하여 대화를 시작해주세요."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <SendBtnWapper>
                    <ChatSendIcon />
                </SendBtnWapper>
            </InputChat>
        </Container>
    )
};
