import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import BackIcon from '../assets/images/back_icon.svg?react';
import ChatSendIcon from "../assets/images/chat_send.svg?react";
import BotBubble from "../components/BotBubble";
import UserBubble from "../components/UserBubble";
import SystemChat from "../components/SystemChat";

// ... (스타일 컴포넌트들은 기존과 동일하게 유지 - 생략 없이 그대로 사용하시면 됩니다)
const Container = styled.div`
    margin: 0 auto;
    width: 393px;
    height: 100vh;
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
    flex-shrink: 0;
`;

const BackIconBox = styled.div`
    cursor: pointer;
`;

const CharacterName = styled.p`
    color: #FF76BD;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: scroll;
    position: relative;
    &::-webkit-scrollbar { width: 5px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${props => props.$isScrolling ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0)'};
    }
`;

const ContentChat = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 10px 0px 10px;
    padding-bottom: 10px; 
`
const BottomBox = styled.div`
    display: flex;
    padding: 22px 20px 22px 24px;
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
    &:focus { outline: none; }
`;

const SendBtnWapper = styled.div`
    cursor: pointer;
    svg { width: 39px; height: 39px; }
`;

const InputChat = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 19px;
`;

const EventChoice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    flex: 1;
`;

const ChoiceBtn = styled.div`
    border-radius: 10px;
    background: #FF76BD;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.06);
    padding: 8px 12px;
    cursor: pointer;
    &:hover { background: #D3639D; }

    p {
        color: #FFF;
        font-family: "Pretendard Variable";
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0;
    }
`;

export default function ChatInternal() {
    const navigate = useNavigate();
    const params = useParams();
    const name = params.name;
    const [messages, setMessages] = useState([]);
    const [currentChoices, setCurrentChoices] = useState([]);
    const [inputText, setInputText] = useState("");
    const [eventStart, setEventStart] = useState(false);
    const [waitingReply, setWaitingReply] = useState(false);
    const scrollRef = useRef();
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef(null);
    const inputRef = useRef(null);

    // 1. 초기 메시지 로드
    useEffect(() => {
        async function getMessages() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/chat/${name}`, {
                    withCredentials: true
                });
                const data = response.data.data;
                // 백엔드 데이터 구조에 맞춰서 설정 (chat_history는 배열)
                setMessages(data.chat_history || []);

                // 마지막 상태에 따라 호감도 등 초기화가 필요하다면 여기서 수행
                if (data.chat_history.length > 0) {
                    // 필요 시 마지막 메시지의 호감도 등을 세팅 가능
                }
            }
            catch (e) {
                console.log('초기 메시지 로드 에러', e);
            }
        }
        getMessages();
    }, [name]);

    // 스크롤 자동 이동
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, currentChoices]); // 선택지가 뜰 때도 스크롤 조정

    // 2. 메시지 전송 (채팅)
    const handleSend = async () => {
        if (!inputText.trim() || waitingReply) return;

        // 사용자 메시지 즉시 화면 표시
        const userMsg = { id: Date.now(), sender: 'user', message: inputText };
        setMessages(prev => [...prev, userMsg]);
        setInputText("");
        setWaitingReply(true);

        try {
            const body = { message: inputText };
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat/${name}`, body, {
                withCredentials: true
            });

            const data = response.data.data; // 백엔드: { type, response, trigger_event, affinity, profile_img_url }
            console.log(data);
            // AI 응답 화면 표시
            setMessages(prev => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: 'ai',
                    char_name: name,
                    message: data.response,
                    profile_img_url: data.profile_img_url // [추가] 백엔드에서 받은 프사
                }
            ]);

            setWaitingReply(false);

            // [핵심] 백엔드가 이벤트를 트리거하라고 하면 이벤트 내용 조회 시작
            if (data.trigger_event) {
                console.log("이벤트 발생 조건 충족!");
                setMessages(prev => [
                    ...prev,
                    { id: Date.now(), sender: 'system', message: '- 이벤트 발생 -' },
                ]);
                fetchCurrentEvent(); // 이벤트 정보 가져오기 호출
            }

        } catch (e) {
            console.log('메시지 전송 에러', e);
            setWaitingReply(false);
        }
    };

    // 3. 이벤트 정보 가져오기 (백엔드의 get_current_event에 대응)
    const fetchCurrentEvent = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/chat/${name}/event`, {
                withCredentials: true
            });
            const data = response.data.data; // { is_ended, event: {...}, choices: [] }
            console.log(data);

            if (data.is_ended) {
                navigate(`/ending/${name}`);
                return;
            }

            // 시스템 메시지 & 이벤트 지문(BotBubble 형식) 추가
            setMessages(prev => [
                ...prev,
                {
                    id: Date.now(),
                    sender: 'ai',
                    char_name: name,
                    message: `<strong>${data.event.event_text}</strong>` || "엇... 잠시 문제가 생겼어요...", // [주의] DB 컬럼명에 따라 수정 필요 (예: script, description)
                    profile_img_url: data.profile_img_url // 만약 이벤트용 이미지가 따로 있다면
                }
            ]);

            // 선택지 상태 업데이트 -> 하단 UI가 변경됨
            setCurrentChoices(data.choices || []);
            setEventStart(true);

        } catch (e) {
            console.log('이벤트 로드 에러', e);
        }
    };

    // 4. 선택지 클릭 처리 (백엔드의 handle_choice에 대응)
    const handleChoice = async (idx) => {
        // 선택한 내용 화면에 표시
        const choiceText = currentChoices[idx].text;
        setMessages(prev => [
            ...prev,
            { id: Date.now(), sender: 'user', message: choiceText }
        ]);

        // 선택지 UI 숨기기 (일단 숨기고 결과 기다림)
        setEventStart(false);
        setCurrentChoices([]);

        try {
            // 백엔드 handle_choice는 choice_index 1, 2, 3을 기대하므로 idx + 1
            const body = { choice_index: idx + 1 };
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat/${name}`, body, {
                withCredentials: true
            });

            const data = response.data.data; // { type: 'choice', affinity: ..., message: ... }
            setMessages(prev => [
                ...prev,
                { id: Date.now(), sender: 'ai', char_name: name, message: data.response, profile_img_url: data.profile_img_url }
            ]);

            setTimeout(() => {
                fetchCurrentEvent();
            }, 3000)

        } catch (e) {
            console.log('선택지 전송 에러', e);
        }
    }

    // 봇 답장 대기 해제 시 포커스
    useEffect(() => {
        if (!waitingReply && !eventStart && inputRef.current) {
            inputRef.current.focus();
        }
    }, [waitingReply, eventStart]);

    // 스크롤 UI 핸들러
    const handleScroll = () => {
        if (!isScrolling) setIsScrolling(true);
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 3000);
    };

    useEffect(() => {
        return () => {
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, []);

    const handleKeyDown = (e) => {
        if (e.nativeEvent.isComposing) return;
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    // useEffect(() => {
    //     fetchCurrentEvent();
    // }, [])

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
            <Main $isScrolling={isScrolling} onScroll={handleScroll} ref={scrollRef}>
                <ContentChat>
                    {messages.map((data, idx) => {
                        if (data.sender === 'ai') {
                            // [수정] 백엔드에서 온 profile_img_url 전달
                            return <BotBubble item={data} key={idx} />
                        }
                        else if (data.sender === 'user') {
                            return <UserBubble item={data} key={idx} />
                        }
                        else if (data.sender === 'system') {
                            return <SystemChat item={data} key={idx} />
                        }
                    })}
                </ContentChat>
            </Main>
            <BottomBox>
                {!eventStart
                    ? <InputChat>
                        <InputText
                            placeholder={waitingReply ? '답장을 기다리는 중...' : '내용을 입력하여 대화를 시작해주세요.'}
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={waitingReply}
                            ref={inputRef}
                        />
                        <SendBtnWapper onClick={() => handleSend()}>
                            <ChatSendIcon />
                        </SendBtnWapper>
                    </InputChat>

                    : <EventChoice>
                        {/* 서버에서 받아온 선택지 렌더링 */}
                        {currentChoices && currentChoices.map((item, idx) => {
                            if (item) {
                                return (
                                    <ChoiceBtn onClick={() => handleChoice(idx)} key={idx}>
                                        <p dangerouslySetInnerHTML={{ __html: item?.text }} />
                                    </ChoiceBtn>
                                )
                            }
                        })}
                    </EventChoice>
                }
            </BottomBox>
        </Container>
    )
};