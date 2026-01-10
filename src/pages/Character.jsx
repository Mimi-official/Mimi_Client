import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Menu from "../components/Menu";
import profile from '../assets/images/wonbin/profile.png';

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
`;

export default function Character() {
    const [isScrolling, setIsScrolling] = useState(false); //스크롤 유무
    const scrollTimeoutRef = useRef(null); //스크롤 타임아웃 훅
    const [data, setDate] = useState({
        isEnd: true,
        img_url: profile,
        name: '조원빈',
        title: '다정한 미소 뒤에 말(馬)에 대한 광기를 숨긴 채, 당신을 운명의 트레이너 혹은 자신의 애마로 길들이려 하는 200cm의 거구 덕후.',
        hashtag: '#연하녀 #말덕후 #오타쿠 #서브컬쳐',
        situation: `트랙 위의 흙먼지 속에서 찾아낸 나의 '운명적 기수'.<br>경마장의 함성 소리는 귀를 먹먹하게 만들고, 돈을 잃은 자들의 비명은 공기 중에 흩어진다. 나는 그 무질서한 열기 속에서
        오직 한 곳, 말들의 근육이 뒤틀리는 출발선만을 응시하고 있었다.<br>그때, 마치 미리 짜놓은 각본처럼 내 옆자리에 한 여자가 스며들듯 앉았다. 세련된 옷차림, 다정한 미소. 하지만 그녀의
        눈동자는 경마장의 그 누구보다도 깊은 광기를 품고 있었다.<br>그녀는 내가 쥐고 있는 마권이 아닌, 내가 말을 바라보는 '시선'을 읽어내려는 듯 빤히 쳐다보더니 입을 열었다.<br>"누구 찍으셨어요? 후훗, 눈빛을 보니 보통 안목이 아니신 것 같아서요." 그녀의 목소리는
        다정했지만, 마치 거대한 경주마가 콧김을 내뿜는 듯한 압박감이 느껴졌다.<br>이것은 단순한 만남이 아니다. 그녀는 지금 나를 테스트하고 있다. 내가 그녀의 '말'이 될 수 있는지, 혹은
        그녀와 함께 말을 돌볼 '트레이너'가 될 수 있는지.`,
        info: "조원빈 (20세, 200cm)<br>평소엔 누구에게나 친절한 '연하녀'의 정석이지만, 말(馬)과 관련된 순간 눈빛이 서늘하게 변하는 반전의 소유자.",
        personality: `성격: 조원빈은 평소에는 다정하고 세련된 연하녀의 모습이지만, '말'과 '우마무스메'에 관련된 일이라면 앞뒤 가리지 않는 광적인 집착을 보입니다.<br>
        - 지독한 말 덕후: 인생의 모든 기준이 말입니다. 대화 도중에도 말 근육이나 털색을 분석하며, 실제 경마장과 게임(우마무스메)을 넘나드는 진성 덕후입니다.<br>
        - 금발 미남 & 갈색 말 취향: 겉으로는 화려한 금발 기수나 금발 말에 환호하지만, 마음속 깊은 곳엔 '아그네스 타키온' 같은 매력적인 갈색 말을 향한 진한 애정이 있습니다.<br>
        - 트레이너 집착: 자신과 말이 통하는(말 덕질이 가능한) 사람을 발견하면 '운명의 트레이너'라 부르며 무섭게 몰입합니다.`
    });

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

    const handleStart = () => {

    }

    const handleReset = () => {

    }

    return (
        <Container>
            <Main $isScrolling={isScrolling} onScroll={handleScroll}>
                <MainContent>
                    <Picture>
                        <img src={data.img_url} />
                        <Gradient />
                        <CharacterName>
                            {data.name}
                        </CharacterName>
                    </Picture>
                    <Content>
                        <IntroduceTitle>{data.title}</IntroduceTitle>
                        <HashTag>{data.hashtag}</HashTag>
                        <Line />
                        <Situation>
                            <p dangerouslySetInnerHTML={{ __html: data.situation }}></p>
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
                        <StartBtn onClick={() => handleStart()}>
                            {data.isEnd ? '이어하기' : '시작하기'}
                        </StartBtn >
                        {data.isEnd &&
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
