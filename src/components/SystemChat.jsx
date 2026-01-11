import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const SystemText = styled.div`
    color: rgba(0, 0, 0, 0.5);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export default function SystemChat(props) {
    return (
        <Container>
            <SystemText>
                {props.item.message}
            </SystemText>
        </Container>
    )
};
