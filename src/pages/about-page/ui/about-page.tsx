import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('about_page_title')}
            {t('testing')}
        </div>
    );
};

export default AboutPage;
