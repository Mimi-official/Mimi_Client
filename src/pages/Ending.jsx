import styled from "styled-components";
import wonbin_ending1 from "../assets/images/wonbin/ending1.png";

const Container = styled.div`
    margin: 0 auto;
    width: 393px;
    height: 852px;
    display: flex;
    flex-direction: column;
`;

const EndingPicture = styled.div`
    height: 505px;
    background-color: #f1f1f1;
    overflow: hidden;
    position: relative;

    img {
        height: 100%;
        height: 100%;
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

export default function Ending() {
    const img_url = wonbin_ending1;
    const data = {
        title: '트리플 크라운 러브',
    }
    return (
        <Container>
            <EndingPicture>
                <img src={img_url}/>
                <Gradient/>
                <EndingName>
                    {data.title}
                </EndingName>
            </EndingPicture>
        </Container>
    )
};
