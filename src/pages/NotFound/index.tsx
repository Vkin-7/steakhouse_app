import { withTranslation, WithTranslation } from "react-i18next";

import { 
    NotFoundContainer, 
    NotFoundMessageContainer,
    NotFoundMessageHeader,
    NotFoundImage,
    NotFoundText 
} from "../../components/NotFound.tsx";

import ErrorImage from '../../assets/error_img.png';

const NotFound: React.FC<WithTranslation> = ({ t }) => {
    return (
        <NotFoundContainer>
            <NotFoundMessageContainer>
                <NotFoundMessageHeader>
                    <h1>{t('NotFound')}</h1>
                    <h1>Error 404</h1>
                </NotFoundMessageHeader>

                <NotFoundImage src={ErrorImage} />
                <NotFoundText>{t('ErrorMessage')}</NotFoundText>
            </NotFoundMessageContainer>
        </NotFoundContainer>
    );
}

export default withTranslation()(NotFound);