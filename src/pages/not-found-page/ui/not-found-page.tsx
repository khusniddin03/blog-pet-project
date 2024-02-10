import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import cls from './not-found-page.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls?.NotFoundPage)}>
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFoundPage;
