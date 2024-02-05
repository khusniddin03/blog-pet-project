import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import Button, { ButtonTheme } from '../button/button';

interface LangSwitcherProps {
  className?: string
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
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
            {t('translate')}
        </Button>
    );
};

export default LangSwitcher;
