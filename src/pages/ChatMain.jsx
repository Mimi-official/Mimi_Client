import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    width: 393px;
    height: 852px;
    display: flex;
    flex-direction: column;
    background: #F1F1F1;
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
`;

const Main = styled.div`
    
`;

export default function Chat() {
    const navigate = useNavigate();
    return (
        <Container>
            <Title>
                대화를 이어가세요!
            </Title>
            <Main>

            </Main>
        </Container>
    )
};
