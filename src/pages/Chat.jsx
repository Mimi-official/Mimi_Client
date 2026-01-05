import { useState } from "react";
import styled from "styled-components";
import backIcon from '../assets/images/back_icon.svg?react';

const Container = styled.div``;

const Header = styled.header`
    
`;

export default function Chat() {
    return (
        <Container>
            <Header>
                <backIcon/>
            </Header>
        </Container>
    )
};
