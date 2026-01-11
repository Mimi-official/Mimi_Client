import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    padding: 12px 16px;
    display: flex;
    gap: 16px;
`;

const ProfileImg = styled.div`
    width: 56px;
    height: 56px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: #D9D9D9;
    overflow: hidden;

    img {
        width: 100%;
    }
`;

const ChatInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    min-width: 0;
`

const ChatName = styled.p`
    color: var(--Grey-800, #424242);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
`;

const LastChat = styled.div`
    color: var(--Grey-700, #616161);
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;

    width: 100%;
    
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;

    & * {
        display: inline; 
        margin: 0;
        padding: 0;
        font-weight: inherit; /* 내부 태그의 굵기 등 스타일 상속 */
        color: inherit;
    }

    img {
        display: none;
    }
`;
export default function ChatListBox(props) {
    const navigate = useNavigate();
    const data = props.item;
    const name = data.char_name;
    const profile_img = data.profile_img_url;
    const text = data.last_message ?? '테스트 내용. 이게 보인다면 새로고침을 해보세요!';
    return (
        <Container onClick={() => navigate(`/chat/${name}`)}>
            <ProfileImg>
                <img src={profile_img}/>
            </ProfileImg>
            <ChatInfo>
                <ChatName>
                    {name}
                </ChatName>
                <LastChat>
                    <p dangerouslySetInnerHTML={{__html : text}}></p>
                </LastChat>
            </ChatInfo>
        </Container>
    )
};
