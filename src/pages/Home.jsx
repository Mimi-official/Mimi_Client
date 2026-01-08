import styled from "styled-components";
import 조원빈 from "../assets/images/조원빈.svg";
import 한지연 from "../assets/images/한지연.svg";
import 김민재 from "../assets/images/김민재.svg";
import 강서현 from "../assets/images/강서현.svg";
import 민정원 from "../assets/images/민정원.svg";
import 윤서우 from "../assets/images/윤서우.svg";

const MobileWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    max-width: 390px;
    margin: 0 auto;
    background-color: #fdfdfd;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom: 109px;
`;

const StatusBar = styled.div`
    height: 44px;
    width: 100%;
    background-color: #fdfdfd;
`;

const Header = styled.header`
    padding: 0px 20px;
    text-align: center;
    background-color: #fdfdfd;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.06);
    position: relative;
    z-index: 1;
    width: 390px;
    height: 68px;                                                                                      
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

const CardGrid = styled.div`
    flex: 1;
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    overflow-y: auto;
`;

const Card = styled.div`
    position: relative;
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
    position: absolute;
    inset: 0;
    background-color: #d9d9d9;
    background-image: ${props => props.$image ? `url(${props.$image})` : 'none'};
    background-size: cover;
    background-position: center;
`;



const BottomNav = styled.nav`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 390px;
    width: 100%;
    height: 109px;
    background-color: #fff;
    border-top: 1px solid #cecece;
    border-radius: 20px 20px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    box-sizing: border-box;
`;

const NavContainer = styled.div`
    display: flex;
    width: 100%;
    height: 56px;
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

export default function Home() {
    const characters = [
        {
            id: 1,
            
            image: 조원빈
        },
        {
            id: 2,
            
            image: 한지연
        },
        {
            id: 3,
            
            image: 김민재
        },
        {
            id: 4,
            
            image: 강서현
        },
        {
            id: 5,
            
            image: 민정원
        },
        {
            id: 6,
            
            image: 윤서우
        }
    ];

    return (
        <MobileWrapper>
            <StatusBar />

            <Header>
                <Title>대화할 상대를 고르세요!</Title>
            </Header>

            <CardGrid>
                {characters.map(character => (
                    <Card key={character.id}>
                        <CardBackground $image={character.image} />
                        {/* <CardGradient /> */}
                        {/* <CardContent>
                            <CardTitle>{character.name}</CardTitle>
                            <CardDescription>{character.description}</CardDescription>
                        </CardContent> */}
                    </Card>
                ))}
            </CardGrid>

            <BottomNav>
                <NavContainer>
                    <NavItem $active>
                        <NavIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </NavIcon>
                        <span>홈</span>
                    </NavItem>
                    <NavItem>
                        <NavIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </NavIcon>
                        <span>대화</span>
                    </NavItem>
                    <NavItem>
                        <NavIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </NavIcon>
                        <span>마이페이지</span>
                    </NavItem>
                </NavContainer>
            </BottomNav>
        </MobileWrapper>
    );
}
