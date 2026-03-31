import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";

const MobileWrapper = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 390px;
    margin: 0 auto;
    background-color: #fdfdfd;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    text-align: center;
    background-color: #fdfdfd;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.06);
    position: relative;
    padding: 20px;                                                                                
    display: flex;                                                                                     
    align-items: center;                                                                               
    justify-content: center; 
`;

const Title = styled.h1`
    font-family: 'Pretendard', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #ff76bd;
    margin: 0;
`;

const Main = styled.div`
    height: 100%;
    flex: 1;
    overflow: auto;
`;

const CardGrid = styled.div`
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
`;

const Card = styled.div`
    border-radius: 8px;
    overflow: hidden;
    height: 270px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.02);
    }
`;

const CardBackground = styled.div`
    height: 100%;
    position: relative;
    inset: 0;
    background: ${props => props.$image ? `url(${props.$image})` : '#d9d9d9'};
    background-size: cover;
    background-position: center;
`;

const BottomNav = styled.nav`
    width: 100%;
    border-radius: 20px 20px 0 0;
    border: 1px solid var(--Grey-300, #CECECE);
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    box-sizing: border-box;
`;

const NavContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const NavItem = styled.button`
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    color: ${props => props.$active ? '#ff76bd' : '#9e9e9e'};
    font-family: 'Pretendard', sans-serif;
    font-size: 12px;
    padding: 0;
    flex: 1;
    min-width: 0;
`;

const NavIcon = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardGradient = styled.div`
    height: 100%;
    position: absolute;
    width: 100%;
    bottom: 0;
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0.00) 34.62%, #FFC2E2 100%);
`;

const CardInfo = styled.div`
    position: absolute;
    bottom: 0;
    padding: 9px;
`;

const CardName = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const CardHashTag = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export default function Home() {
    const navigate = useNavigate();
    const [characters, setCharacters] = useState();

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/characters/`);
                const data = response.data.data;
                console.log("받아온 데이터:", data);
                setCharacters(data);
            }
            catch (e) {
                console.log('에러 발생', e);
            }
        }
        getData();
    }, []);

    if (!characters) {
        return;
    }

    return (
        <MobileWrapper>

            <Header>
                <Title>대화할 상대를 고르세요!</Title>
            </Header>

            <Main>
                {characters && <CardGrid>
                    {characters.map(character => (
                        <Card key={character.id} onClick={() => { navigate(`/character/${character.id}`) }}>
                            <CardBackground $image={character.profile_img_url}>
                                <CardGradient />
                                <CardInfo>
                                    <CardName>{character.name}</CardName>
                                    <CardHashTag>{character.hashtags}</CardHashTag>
                                </CardInfo>
                            </CardBackground>
                        </Card>
                    ))}
                </CardGrid>}
            </Main>

            <Menu menu={1} />
        </MobileWrapper>
    );
}
