import styled from "styled-components";

export const NotFoundContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NotFoundMessageContainer = styled.div`
    width: 50%;
    border-radius: .7rem;
    padding: 2rem;
    text-align: center;

    @media(max-width: 800px) {
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    background-color: ${props => props.theme.secondary};
`;

export const NotFoundMessageHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-bottom: 2rem;
`;

export const NotFoundImage = styled.img`
    width: 40%;
`;

export const NotFoundText = styled.p`
    font-size: 1rem;
`