import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 18px;
`;

const BotProfile = styled.div`
    margin-top: 7px;
    width: 37px;
    height: 37px;
    background-color: #D9D9D9;
    border-radius: 50%;
    overflow: hidden; 
    
    img {
        width: 100%;
    }
`;

const BotContents = styled.div`
    gap: 3px;
    width: 76%;
`;

const BotName = styled.div`
    margin-left: 2px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.5;
`;

const BotContent = styled.div`
    border-radius: 0 10px 10px 10px;
    background: #FFF;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.06);
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 8px 10px;
    color: rgba(0, 0, 0, 0.5); 

    strong {
        color: rgba(0, 0, 0, 1); 
    }
`

export default function BotBubble(props) {
    // console.log(props.item);
    const name = props.item.char_name;
    const profile_img = props.item.profile_img_url;
    const content = props.item.message;
    return (
        <Container>
            <BotProfile>
                {profile_img && <img src={profile_img} alt="프로필 이미지" />}
            </BotProfile>
            <BotContents>
                <BotName>
                    {name}
                </BotName>
                <BotContent dangerouslySetInnerHTML={{__html : content}}/>
            </BotContents>
        </Container>
    )
};
