import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Menu from "../components/Menu";
import profile from '../assets/images/wonbin/profile.png';
import axios from "axios";

const Container = styled.div`
    margin: 0 auto;
    width: 393px;
    height: 852px;
    display: flex;
    flex-direction: column;
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
`

const MainContent = styled.div``;

const Picture = styled.div`
    height: 505px;
    background-color: #f1f1f1;
    overflow: hidden;
    position: relative;

    img {
        height: 100%;
        width: 100%;
        object-fit:cover;
    }
`;

const Gradient = styled.div`
    position: absolute;
    display: flex;
    height: 50%;
    width: 100%;
    border-radius: 8px 8px 0 0;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0.00) 34.62%, #FFC2E2 100%);
    bottom: 0;
    object-fit:cover;
`

const CharacterName = styled.div`
    position: absolute;
    left: 16px;
    bottom: 16px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Content = styled.div`
    padding: 15px 16px 0px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const IntroduceTitle = styled.p`
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const HashTag = styled.p`
    color: #737373;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const Line = styled.div`
    height: 1px;
    background: #D9D9D9;
    width: 100%;
    margin: 10px 0px;
`

const Situation = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
`;

const CharacterInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const PersonalDataBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

const PersonalDataTitle = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    
`

const PersonalDataContent = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
`

const StartBtnBox = styled.div`
    padding: 48px 15px;
    display: flex;
    gap: 14px;
`;

const StartBtn = styled.button`
    width: 100%;
    display: flex;
    padding: 14px 0px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 20px;
    background: #FF76BD;
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    cursor: pointer;

    &:hover {
        background: #D3639D;
    }
`;

const ResetBtn = styled.button`
    width: 100%;
    display: flex;
    padding: 14px 0px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 20px;
    background: #FF585B;
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    cursor: pointer;
`;

export default function Character() {
    const navigate = useNavigate();
    const [isScrolling, setIsScrolling] = useState(false); //스크롤 유무
    const scrollTimeoutRef = useRef(null); //스크롤 타임아웃 훅
    const params = useParams();
    const id = params.id;
    const [data, setData] = useState({});

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/characters/${id}`, {
                    withCredentials: true
                });
                const data = response.data.data;
                console.log("받아온 데이터:", data);
                setData(data);
            }
            catch (e) {
                console.log('에러 발생', e);
            }
        }
        getData();
    }, []);

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

    const handleStart = (chatting) => {
        const body = { character_id: id };
        async function gameStart() {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat/start`, body, {
                withCredentials: true
            });
            console.log(response.data);
            navigate(`/chat/${data.name}`)
        }

        if (chatting) {
            navigate(`/chat/${data.name}`)
        }
        else {
            gameStart();
        }
    }

    const handleReset = () => {
        const body = { character_id: id };
        async function gameStart() {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat/start`, body, {
                withCredentials: true
            });
            console.log(response.data);
            navigate(`/chat/${data.name}`)
        }
        if (confirm('정말 초기화 후 다시 시작하시겠습니까?')) {
            gameStart();
        }
    }

    return (
        <Container>
            <Main $isScrolling={isScrolling} onScroll={handleScroll}>
                <MainContent>
                    <Picture>
                        <img src={data.profile_img_url} />
                        <Gradient />
                        <CharacterName>
                            {data.name}
                        </CharacterName>
                    </Picture>
                    <Content>
                        <IntroduceTitle>{data.title}</IntroduceTitle>
                        <HashTag>{data.hashtags}</HashTag>
                        <Line />
                        <Situation>
                            <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
                        </Situation>
                        <Line />
                        <CharacterInfo>
                            <PersonalDataBox>
                                <PersonalDataTitle>캐릭터</PersonalDataTitle>
                                <PersonalDataContent><p dangerouslySetInnerHTML={{ __html: data.info }}></p></PersonalDataContent>
                            </PersonalDataBox>
                            <PersonalDataBox>
                                <PersonalDataTitle>성격</PersonalDataTitle>
                                <PersonalDataContent><p dangerouslySetInnerHTML={{ __html: data.personality }}></p></PersonalDataContent>
                            </PersonalDataBox>
                        </CharacterInfo>
                    </Content>
                    <StartBtnBox>
                        <StartBtn onClick={() => handleStart(data.user_progress?.is_chatting)}>
                            {data.user_progress?.is_chatting ? '이어하기' : '시작하기'}
                        </StartBtn >
                        {data.user_progress?.is_chatting &&
                            <ResetBtn onClick={() => handleReset()}>
                                초기화
                            </ResetBtn>
                        }
                    </StartBtnBox>
                </MainContent>
            </Main>

            <Menu menu={1} />
        </Container>
    )
};
