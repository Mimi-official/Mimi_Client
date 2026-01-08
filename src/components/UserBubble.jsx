import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: end;
    margin-bottom: 18px;
`;

const UserContentBox = styled.div`
    gap: 3px;
    width: 76%;
`;

const UserContent = styled.div`
    border-radius: 10px 0 10px 10px;
    background: #FF76BD;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.06);
    color: #FFF;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 8px 10px;
`


export default function UserBubble(props) {
    const name = props.item.name;
    const content = props.item.text;
    return (
        <Container>
            <UserContentBox>
                <UserContent dangerouslySetInnerHTML={{ __html: content }} />
            </UserContentBox>
        </Container>
    )
};
