import { withTranslation, WithTranslation } from "react-i18next";
import styled from "styled-components";

import WaiterImg from '../../assets/waiter.jpg';

const AboutUs: React.FC<WithTranslation> = ({ t }) => {
    return(
        <AboutUsContainer id="AboutUs">
            <AboutUsTitle>{t('AboutUs')}</AboutUsTitle>

            <AboutUsContent>
                <AboutUsText>{t('AboutUsText') + t('AboutUsText') + t('AboutUsText')}</AboutUsText>
                <AboutUsImage src={WaiterImg} />
            </AboutUsContent>
            
        </AboutUsContainer>
    );
}

export default withTranslation()(AboutUs);

export const AboutUsContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.secondary};
    padding: 2rem;

    position: relative;

    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`

export const AboutUsTitle = styled.h1`
    text-align: center;
    font-size: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    &:before{
        content: '';
        width: 5rem;
        height: .1rem;
        margin-right: .5rem;

        background-color: ${props => props.theme.text.primary};
    }

    &:after{
        content: '';
        width: 5rem;
        height: .1rem;
        margin-left: .5rem;

        background-color: ${props => props.theme.text.primary};
    }

    @media(max-width: 800px) {
        font-size: 1.5rem;

        &:before{
            width: 3rem;
        }

        &:after{
            width: 3rem;
        }
    }
`

export const AboutUsContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 800px) {
        flex-direction: column;
        justify-content: space-between;
    }
`

export const AboutUsText = styled.p`
    width: 50%;
    font-size: 1rem;

    @media(max-width: 800px) {
        width: 100%;
        font-size: .8rem;
    }
`

export const AboutUsImage = styled.img`
    width: 35vw;
    height: 35vw;
    object-fit: cover;
    border-radius: 50%;

    @media(max-width: 800px) {
        width: 50vw;
        height: 50vw;
        margin-top: 1rem;
    }
`