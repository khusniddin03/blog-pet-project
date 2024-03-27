import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import Button, { ButtonTheme } from '../button/button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggle}
        >
            {short ? t('Короткий язык') : t('Язык')}
        </Button>
    );
};

export default LangSwitcher;
