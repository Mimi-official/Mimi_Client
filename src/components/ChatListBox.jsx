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

const LastChat = styled.p`
    color: var(--Grey-700, #616161);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    white-space: nowrap;      /* 줄바꿈 방지 */
    overflow: hidden;         /* 영역을 벗어나는 내용 숨김 */
    text-overflow: ellipsis;
    width: 100%;
`;

export default function ChatListBox(props) {
    const navigate = useNavigate();
    const data = props.item;
    const id = data.id;
    const profile_img = data.img;
    const name = data.name ?? '테스트';
    const text = data.lastchat ?? '테스트 내용. 이게 보인다면 새로고침을 해보세요!';
    return (
        <Container onClick={() => navigate(`/chat/${id}`)}>
            <ProfileImg>
                <img src={profile_img}/>
            </ProfileImg>
            <ChatInfo>
                <ChatName>
                    {name}
                </ChatName>
                <LastChat>
                    {text}
                </LastChat>
            </ChatInfo>
        </Container>
    )
};
