import { BugButton } from 'app/providers/error-boundary';
import { Counter } from 'entities/counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <BugButton />
            <Counter />
        </div>
    );
};

export default MainPage;
