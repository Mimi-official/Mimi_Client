import styled from "styled-components";
import wonbin_ending1 from "../assets/images/wonbin/ending1.png";

const Container = styled.div`
    margin: 0 auto;
    width: 393px;
    height: 852px;
    display: flex;
    flex-direction: column;
`;

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

const EndingName = styled.div`
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

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 15px 16px 0px 16px;
`;

const EndingType = styled.p`
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const Line = styled.div`
    height: 1px;
    background: #D9D9D9;
    width: 100%;
    margin: 10px 0px;
`

const EndingContent = styled.p`
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    strong {
        font-weight: 600;
    }
`;

const BtnBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 22px 20px 22px 24px;
    border-radius: 20px 20px 0 0;
    border: 1px solid var(--Grey-300, #CECECE);
    background: #FFF;
`;

const ChoiceBtn = styled.div`
    display: flex;
    padding: 14px 78px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 20px;
    background: ${props => props.$background};
    color: ${props => props.$color};
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    &:hover {
        background: ${props => props.$background_hover};
    }
`;

export default function Ending() {
    const data = {
        img_url: wonbin_ending1,
        title: '트리플 크라운 러브',
        type: '성공',
        content: `원빈은 당신을 '운명의 트레이너'로 임명합니다.<br> 매주 경마장에서 만나고 평일엔 카페에서 육성 전략을 짭니다.<br><br>
<strong>"다음 경기는 우리 집에서 같이 볼까요, 트레이너님?"</strong>`
    }

    return (
        <Container>
            <Picture>
                <img src={data.img_url}/>
                <Gradient/>
                <EndingName>
                    {data.title}
                </EndingName>
            </Picture>
            <ContentBox>
                <EndingType>
                    {data.type} 엔딩 [{data.title}]
                </EndingType>
                <Line/>
                <EndingContent>
                    <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
                </EndingContent>
            </ContentBox>
            <BtnBox>
                <ChoiceBtn $background={"#FF76BD"} $color={"#FFF"} $background_hover={"#D3639D"}>
                    다시하기
                </ChoiceBtn>
                <ChoiceBtn $background={"#FFC6E3"} $color={"#000"} $background_hover={"#FFB2D9"}>
                    처음으로
                </ChoiceBtn>
            </BtnBox>
        </Container>
    )
};
