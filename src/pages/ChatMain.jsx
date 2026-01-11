import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChatListBox from "../components/ChatListBox";
import Menu from "../components/Menu";
import axios from "axios";

const Container = styled.div`
    margin: 0 auto;
    width: 393px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Title = styled.p`
    color: #FF76BD;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 20px;
    text-align: center;
    background: var(--WHITE-01, #FDFDFD);
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.06);
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 22px;
`;

export default function Chat() {
    const [data, setData] = useState("");
    useEffect(() => {
        async function fecthData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/chat/list`, {
                    withCredentials: true
                });
                console.log(response.data);
                setData(response.data.data);
            }
            catch(error) {
                console.log(error)
            }
        }
        fecthData();
    }, [])
    
    return (
        <Container>
            <Title>
                대화를 이어가세요!
            </Title>
            <Main>
                {data && data.map((item) => {
                    return (
                        <ChatListBox key={item.id} item={item} />
                    )
                })}
            </Main>
            <Menu menu={2}/>
        </Container>
    )
};
