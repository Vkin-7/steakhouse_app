import { withTranslation, WithTranslation } from "react-i18next";
import { IoChevronBackOutline } from 'react-icons/io5';

const NotFound: React.FC<WithTranslation> = ({ t }) => {
    return (
        <>
            <IoChevronBackOutline />
            <h1>{t('Not Found')}</h1>
        </>
    );
}

export default withTranslation()(NotFound);