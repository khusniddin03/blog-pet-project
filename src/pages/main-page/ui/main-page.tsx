import { BugButton } from 'app/providers/error-boundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('main_page_title')}
            <BugButton />
        </div>
    );
};

export default MainPage;
