import { useState, useEffect, useRef, use } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackIcon from '../assets/images/back_icon.svg?react';
import ChatSendIcon from "../assets/images/chat_send.svg?react";
import BotBubble from "../components/BotBubble";
import UserBubble from "../components/UserBubble";
import SystemChat from "../components/SystemChat";

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
    flex-shrink: 0;
`;

const BackIconBox = styled.div`
    cursor: pointer; /* 클릭 가능하다는 표시 */
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
    &::-webkit-scrollbar {
        width: 5px; /* 스크롤바 너비 */
    }

    &::-webkit-scrollbar-track {
        background: transparent; /* 트랙은 항상 투명 */
    }

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
    padding: 23px 20px 23px 24px;
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
    &:hover {
        background: #D3639D;
    }

    p {color: #FFF;
        font-family: "Pretendard Variable";
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`;

export default function ChatInternal() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            name: '조원빈',
            text: "쨍한 햇살 아래, 경주마들의 우렁찬 발굽 소리가 트랙을 가득 채우는 경마장에서  수많은 인파 속에서도 당신은 오직 한 마리 말에게서 시선을 떼지 못하고 간절한 눈으로  응원하고 있었다.<br><br>그때, 왁자지껄한 소음 사이를 뚫고 희미한 말굽 소리가 당신의 심장을  울린다. 바로 옆자리, 누군가 익숙한 듯 자연스럽게 착석하는 인기척이 느껴진다.<br><br>흘끗 고개를  돌리니, 다정한 눈빛으로 당신이 응원하던 말을 함께 지켜보던 그녀가 살짝 미소 지으며 말을  건낸다.<br><br><strong>누구 찍으셨어요? 후훗, 눈빛을 보니 보통 안목이 아니신 것 같아서요.</strong>",
        },
    ]);

    const [eventList, setEventList] = useState([
        {
            id: 1,
            type: 'bot',
            name: '조원빈',
            text: "원하는 답변이 나오자 기대감에 가득찬 눈으로 쳐다보며 말했다.<br><br><strong>가장 좋아하는 말은 어떤 스타일이에요?</strong>",
            choice: ['햇살을 받으면 구릿빛으로 빛나는 진한 갈색<br>말이 제일 섹시하죠', '눈에 확 띄는 백마나 금발 말이 제일 예쁘지<br> 않나요?'],
            response: [
                `<strong>오... 당신, 진짜를 아시는군요? 금발은 화려해서 좋지만, 저 깊이 있는 갈색 털이야말로 진정한 '실력파'의 오라가 느껴지거든요. 마치 제 최애인 타키온처럼요!</strong>`,
                `(기대했던 빛이 눈동자에서 순식간에 사라지며)<strong>아...역시 외형 위주로보시는구나. 뭐, 백마가 화려한 게 좋긴 하죠.동화 속 왕자님 같기도 하고. 하지만... 그런 겉모습에만 치중하다 보면 그 너머에 있는 말의 진정한 '혈통'과 '근성'은 절대 볼 수 없거든요. 조금 아쉽네요, 트레이너님과는 보는 눈이 좀 다를지도 모르겠어요.</strong>`,
            ],
            addAffection: [
                20, -20
            ]
        },
        {
            id: 2,
            type: 'bot',
            name: '조원빈',
            text: "<strong>평소에 시간 날 때 자주 하는 게임 있어요?</strong>",
            choice: ['요즘 우마무스메에 푹 빠져서 트레이너 생활 중이에요.', '그냥 평범한 퍼즐 게임이나 해요.'],
            response: [
                `<strong>트레이너님이었어?! 어쩐지 기운이 남다르다 했어요! 제 육성 덱 봐주실래요? 이번 챔피언즈 미팅 너무 힘들거든요~</strong>`,
                `(어색하게 입꼬리만 올려 미소 지으며)<strong>"아... 퍼즐... 네, 머리 쓰는 건 좋죠. 블록 맞추는 거... 재밌겠네요. 전 또 혹시나 해서 기대했는데. 역시 저처럼 말들의 숨소리에 심장이 뛰고, 서포트 카드 한 장에 인생을 거는 '진짜' 트레이너를 만나는 건 역시 역배(역배당)를 맞추는 것만큼이나 어려운 일인가 봐요. 갑자기 좀 피곤해지네요. 전 이만 가볼게요.</strong>`,
            ],
            addAffection: [
                20, -20
            ]
        },
        {
            id: 3,
            type: 'bot',
            name: '조원빈',
            text: "<strong>평소에 시간 날 때 자주 하는 게임 있어요?</strong>",
            choice: ['요즘 우마무스메에 푹 빠져서 트레이너 생활 중이에요.', '그냥 평범한 퍼즐 게임이나 해요.'],
            response: [
                `<strong>트레이너님이었어?! 어쩐지 기운이 남다르다 했어요! 제 육성 덱 봐주실래요? 이번 챔피언즈 미팅 너무 힘들거든요~</strong>`,
                `(어색하게 입꼬리만 올려 미소 지으며)<strong>"아... 퍼즐... 네, 머리 쓰는 건 좋죠. 블록 맞추는 거... 재밌겠네요. 전 또 혹시나 해서 기대했는데. 역시 저처럼 말들의 숨소리에 심장이 뛰고, 서포트 카드 한 장에 인생을 거는 '진짜' 트레이너를 만나는 건 역시 역배(역배당)를 맞추는 것만큼이나 어려운 일인가 봐요. 갑자기 좀 피곤해지네요. 전 이만 가볼게요.</strong>`,
            ],
            addAffection: [
                20, -20
            ]
        }

    ]);
    const [evnetCount, setEventCount] = useState(0); //현재 이벤트 진행 상황
    const [affection, setAffection] = useState(0); //호감도
    const [inputText, setInputText] = useState(""); //현재 입력된 채팅
    const [eventStart, setEventStart] = useState(false); //이벤트 시작 유무
    const [waitingReply, setWaitingReply] = useState(false); //답장을 기다리는지 상태 확인
    const scrollRef = useRef(); //스크롤 훅
    const [isScrolling, setIsScrolling] = useState(false); //스크롤 유무
    const scrollTimeoutRef = useRef(null); //스크롤 타임아웃 훅
    const inputRef = useRef(null); //채팅 입력폼
    const name = "조원빈"; //임시 봇 이름
    const profile_img = null

    //메시지가 추가될 시 자동스크롤
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    //메시지 전송
    const handleSend = () => {
        if (!inputText.trim() || waitingReply) return;
        setWaitingReply(true);
        setMessages(prev => [
            ...prev,
            { id: messages.length + 1, type: 'user', text: inputText }
        ]);
        setInputText("");

        setTimeout(() => {
            if (affection < 60) {
                setMessages(prev => [
                    ...prev,
                    { id: messages.length + 1, type: 'bot', 'name': name, text: `테스트 답장입니다. id : ${messages.length + 1}` }
                ])
            }
            setWaitingReply(false);
            setAffection(prev => prev + 5);
        }, 100)

    };

    //봇이 답장하면 기다림 상태 해제
    useEffect(() => {
        if (!waitingReply && inputRef.current) {
            inputRef.current.focus();
        }
    }, [waitingReply]);

    //호감도 60 이상 시, 이벤트 발동
    useEffect(() => {
        console.log(`현재 호감도 ${affection}`);
        if (affection >= 60 && !eventStart) {
            setEventStart(true);
            setMessages(prev => [
                ...prev,
                { id: messages.length + 1, type: 'system', text: '- 이벤트 발동 -' },
                { id: messages.length + 2, type: 'bot', 'name': name, text: `${eventList[0].text}` }
            ])

        }
    }, [affection])

    //스크롤 관련 함수
    const handleScroll = () => {
        if (!isScrolling) setIsScrolling(true);
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 3000); // 3초 후 사라짐
    };

    useEffect(() => {
        return () => {
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, []);

    //엔터키 입력 시 전송 & 입력 중이면 이벤트 무시
    const handleKeyDown = (e) => {
        if (e.nativeEvent.isComposing) return;
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    //이벤트 선택 버튼 클릭 핸들러
    const eventChoice = (idx) => {
        setMessages(prev => [
            ...prev,
            { id: messages.length + 1, type: 'user', text: `${eventList[evnetCount].choice[idx]}` }
        ])
        console.log(idx);
        setAffection(prev => prev + eventList[evnetCount].addAffection[idx]);
        if (evnetCount+1 < eventList.length) {
            setEventCount(prev => prev + 1);
        }
        else {
            navigate('/ending');
        }
    }

    useEffect(() => {
        if (eventStart) {
            setMessages(prev => [
                ...prev,
                { id: messages.length + 1, type: 'bot', 'name': name, text: `${eventList[evnetCount].text}` }
            ])
        }
    }, [evnetCount])

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
                        if (data.type == 'bot') {
                            return <BotBubble item={data} profile_img={profile_img} key={idx} />
                        }
                        else if (data.type == 'user') {
                            return <UserBubble item={data} key={idx} />
                        }
                        else if (data.type == 'system') {
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

                    :
                    <EventChoice>
                        {(eventList[evnetCount].choice).map((item, idx) => {
                            return (
                                <ChoiceBtn onClick={() => eventChoice(idx)} key={idx}>
                                    <p dangerouslySetInnerHTML={{ __html: item }} />
                                </ChoiceBtn>
                            )
                        })}
                    </EventChoice>


                }
            </BottomBox>
        </Container>
    )
};
