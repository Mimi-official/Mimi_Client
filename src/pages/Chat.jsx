import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackIcon from '../assets/images/back_icon.svg?react';

const Container = styled.div`
    width: 393px;
    height: 852px;
    display: flex;
    flex-direction: column;
    background: #F1F1F1;
`;

const Header = styled.header`
    padding: 11px 20px;
    display: flex;
    gap: 13.76px;
    align-items: center;
    background: #FDFDFD;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.06);
`;

const BackIconBox = styled.div``;

const CharacterName = styled.p`
    color: #FF76BD;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export default function Chat() {
    const navigate = useNavigate();
    const name = "조원빈";
    return (
        <Container>
            <Header>
                <BackIconBox onClick={() => { navigate(-1) }}>
                    <BackIcon />
                </BackIconBox>
                <CharacterName>
                    {name}
                </CharacterName>
            </Header>
        </Container>
    )
};
