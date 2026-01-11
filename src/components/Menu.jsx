import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import HomeIcon from "../assets/images/home_icon.svg?react";
import ChatIcon from "../assets/images/chat_icon.svg?react";
import MypageIcon from "../assets/images/mypage_icon.svg?react";

const Container = styled.div`
    display: flex;
    padding: 12px 0;
    align-items: flex-start;
    padding: 12px 16px;
    border-radius: 20px 20px 0 0;
    border: 1px solid var(--Grey-300, #CECECE);
    background: #FFF;
    justify-content: space-around;
    align-items: center;
`

const MenuBtn = styled.div`
    width: 100%;
    cursor: pointer;
`

const BtnImgWrapper = styled.div`
    justify-content: center;
    display: flex;
    flex: 1;
    svg {
        width: 24px;
        height: 24px;
        path {
            stroke: ${props => props.$activate ? '#FF76BD' : '#9E9E9E'};
        }
    }
`;

const BtnText = styled.p`
    color: ${(props) => props.$activate ? '#FF76BD' : '#9E9E9E'};
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
`;

export default function Menu(props) {
    const menu = props.menu;
    const navigate = useNavigate();
    return (
        <Container>
            <MenuBtn onClick={() => navigate('/home')}>
                <BtnImgWrapper $activate={menu == 1}>
                    <HomeIcon />
                </BtnImgWrapper>
                <BtnText $activate={menu == 1}>
                    홈
                </BtnText>
            </MenuBtn>
            <MenuBtn onClick={() => navigate('/chat')}>
                <BtnImgWrapper $activate={menu == 2}>
                    <ChatIcon />
                </BtnImgWrapper>
                <BtnText $activate={menu == 2}>
                    대화
                </BtnText>
            </MenuBtn>
            <MenuBtn onClick={() => navigate('/mypage')}>
                <BtnImgWrapper $activate={menu == 3}>
                    <MypageIcon />
                </BtnImgWrapper>
                <BtnText $activate={menu == 3}>
                    마이페이지
                </BtnText>
            </MenuBtn>
        </Container>
    )
};
